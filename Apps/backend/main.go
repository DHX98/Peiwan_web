package main

import (
	"fmt"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Use(cors.Default())

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	r.GET("/p", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "123",
		})
	})
	r.POST("/post", func(c *gin.Context) {
		id := c.Query("id")
		fmt.Printf("id: %s;", id)
	})
	r.GET("/signin", func(c *gin.Context) {

		email := c.Query("email")
		password := c.Query("password")
		if email == password {
			c.JSON(200, gin.H{
				"message": "logged in",
			})
		} else {
			c.JSON(200, gin.H{
				"message": "not matched",
			})
		}
	})

	r.Run(":8080") // 监听并在 0.0.0.0:8080 上启动服务
}
