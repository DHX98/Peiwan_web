package main

import (
	"github.com/DHX98/Peiwan_web/Apps/backend/initializers"
	"github.com/DHX98/Peiwan_web/Apps/backend/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
	"os"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

func main() {
	port := os.Getenv("PORT")

	if port == "" {
		log.Fatal("$PORT must be set")
	}
	r := gin.Default()
	r.Use(cors.Default())
	r.GET("/", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"backend": "is running",
		})
	})

	//Routes for users
	routes.UserRoute(r)
	r.Run(port)
}
