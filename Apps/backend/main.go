package main

import (
	"github.com/DHX98/Peiwan_web/Apps/backend/initializers"
	"github.com/DHX98/Peiwan_web/Apps/backend/routes"
	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"log"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}

func main() {

	r := gin.Default()
	r.Use(cors.Default())

	//Routes for users
	routes.UserRoute(r)

	err := r.Run()
	if err != nil {
		log.Fatal("Gin run failed", err)
	}
}
