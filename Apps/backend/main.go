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

	r.POST("/users", controllers.UsersCreate)
	r.PUT("/users/:id", controllers.UsersUpdate)
	r.GET("/users", controllers.UsersAll)
	r.GET("/users/:id", controllers.UsersGetById)
	r.DELETE("/users/:id", controllers.UsersDelete)

	r.Run()
}
