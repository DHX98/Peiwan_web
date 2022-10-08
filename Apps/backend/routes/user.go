package routes

import (
	"github.com/DHX98/Peiwan_web/Apps/backend/controllers"
	"github.com/DHX98/Peiwan_web/Apps/backend/middleware"
	"github.com/gin-gonic/gin"
)

func UserRoute(r *gin.Engine) {
	r.Use(middleware.AuthMiddleware())
	r.POST("/users", controllers.UsersCreate)
	r.PUT("/users/:id", controllers.UsersUpdate)
	r.GET("/users", middleware.AuthMiddleware(), controllers.UsersAll)
	r.GET("/users/:id", controllers.UsersGetById)
	r.DELETE("/users/:id", controllers.UsersDelete)
	r.POST("/users/login", controllers.UsersLogIn)

}
