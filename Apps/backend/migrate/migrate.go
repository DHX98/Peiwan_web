package main

import (
	"github.com/DHX98/Peiwan_web/Apps/backend/initializers"
	"github.com/DHX98/Peiwan_web/Apps/backend/models"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectToDB()
}
func main() {
	initializers.DB.AutoMigrate(&models.User{})
}
