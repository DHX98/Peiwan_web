package main

import (
	"github.com/DHX98/Peiwan_web/Apps/backend/controllers"
	"github.com/DHX98/Peiwan_web/Apps/backend/initializers"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

func main() {

	r := gin.Default()
	r.Use(cors.Default())

	r.GET("/ping", controllers.PostsCreate)
	r.POST("/createpost", controllers.PostsCreate)
	r.Run()
}
