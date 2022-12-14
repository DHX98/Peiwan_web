package controllers

import (
	"fmt"
	"github.com/DHX98/Peiwan_web/Apps/backend/initializers"
	"github.com/DHX98/Peiwan_web/Apps/backend/models"
	"github.com/DHX98/Peiwan_web/Apps/backend/services"
	"github.com/gin-gonic/gin"
	"golang.org/x/crypto/bcrypt"
	"strings"
)

func UsersCreate(c *gin.Context) {
	//Get data off req Body
	var body struct {
		Email    string
		PassWord string
	}
	c.Bind(&body)
	hashedPassword, _ := bcrypt.GenerateFromPassword([]byte(body.PassWord), bcrypt.DefaultCost)

	//Create a user
	user := models.User{Email: body.Email, PassWord: body.PassWord, HashedPassWord: string(hashedPassword)}
	result := initializers.DB.Create(&user) // pass pointer of data to Create
	if result.Error != nil {
		if strings.Contains(result.Error.Error(), "23505") {
			c.JSON(400, gin.H{
				"error": "email is unique",
			})
		}
		return
	}
	token, err := services.ReleaseToken(user)

	if err != nil {
		c.JSON(500, gin.H{
			"server": "error",
		})
		fmt.Println(err)
		return
	}
	//Return it
	c.JSON(200, gin.H{
		"user":  user,
		"token": token,
	})
}

func UsersAll(c *gin.Context) {
	//Get all the users
	var users []models.User
	initializers.DB.Find(&users)
	//Respond with them
	c.JSON(200, gin.H{
		"users": users,
	})
}

func UsersGetById(c *gin.Context) {

	// Get id from URL
	id := c.Param("id")
	//Get first post from db
	var user models.User
	initializers.DB.First(&user, id)

	//Respond
	c.JSON(200, gin.H{
		"user": user,
	})
}

func UsersUpdate(c *gin.Context) {
	//get id from url
	id := c.Param("id")
	//get data from body
	var body struct {
		UserName string
		PassWord string
	}
	c.Bind(&body)
	// Find the post were updating
	var user models.User
	initializers.DB.First(&user, id)

	//update
	initializers.DB.Model(&user).Updates(models.User{
		UserName: body.UserName,
		PassWord: body.PassWord,
	})
	//Respond it
	c.JSON(200, gin.H{
		"user": user,
	})
}

func UsersDelete(c *gin.Context) {
	id := c.Param("id")
	initializers.DB.Delete(&models.User{}, id)
	c.JSON(200, gin.H{
		"delete": "success",
	})
}

func UsersLogIn(c *gin.Context) {
	//Get data off req Body
	var body struct {
		Email    string
		PassWord string
	}
	c.Bind(&body)
	//Find the user by Email
	user := models.User{}
	initializers.DB.Where(&models.User{Email: body.Email}).Find(&user) // pass pointer of data to Create
	re := bcrypt.CompareHashAndPassword([]byte(user.HashedPassWord), []byte(body.PassWord))

	if re != nil {
		c.JSON(401, gin.H{
			"password not matched or not signed in": "True",
		})
		return
	}

	token, err := services.ReleaseToken(user)
	if err != nil {
		c.JSON(500, gin.H{
			"server": "error",
		})
		fmt.Println(err)
		return
	}
	//Return it
	c.JSON(200, gin.H{
		"user":  user,
		"token": token,
	})

}
