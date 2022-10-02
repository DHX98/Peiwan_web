package controllers

import (
	"github.com/DHX98/Peiwan_web/Apps/backend/initializers"
	"github.com/DHX98/Peiwan_web/Apps/backend/models"
	"github.com/gin-gonic/gin"
)

func UsersCreate(c *gin.Context) {
	//Get data off req Body
	var body struct {
		UserName string
		PassWord string
	}
	c.Bind(&body)

	//Create a user
	user := models.User{UserName: body.UserName, PassWord: body.PassWord}
	result := initializers.DB.Create(&user) // pass pointer of data to Create
	if result.Error != nil {
		c.Status(400)
		return
	}
	//Return it
	c.JSON(200, gin.H{
		"user": user,
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
