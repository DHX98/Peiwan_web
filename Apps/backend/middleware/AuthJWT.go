package middleware

// Ref : https://github.com/better2021/goPro/blob/c94e5e6f8faa78e378142823e07962f37d6e9b7f/ginGo/route/routes.go
import (
	"fmt"
	"github.com/DHX98/Peiwan_web/Apps/backend/initializers"
	"github.com/DHX98/Peiwan_web/Apps/backend/models"
	"github.com/DHX98/Peiwan_web/Apps/backend/services"
	"github.com/gin-gonic/gin"
	"net/http"
	"strings"
)

func AuthMiddleware() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// 获取authorization header
		tokenString := ctx.GetHeader("Authorization")
		fmt.Println(tokenString, "token")
		// 验证token格式,token要以Bearer 开头
		if tokenString == "" || !strings.HasPrefix(tokenString, "Bearer ") {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "没有权限哦"})
			ctx.Abort() // 中断请求
			return
		}

		tokenString = tokenString[7:] // 截取7位以后的

		token, claims, err := services.ParseToken(tokenString)
		if err != nil || !token.Valid {
			fmt.Println(err, "err", token.Valid)
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "没有权限呀"})
			ctx.Abort() // 中断请求
			return
		}

		// 验证通过获取claim 中的Email
		user := models.User{}
		Email := claims.Email
		initializers.DB.Where(&models.User{Email: Email}).First(&user) // pass pointer of data to Create

		// 用户不存在
		if user.ID == 0 {
			ctx.JSON(http.StatusUnauthorized, gin.H{"code": 401, "msg": "没有权限哟"})
			ctx.Abort() // 中断请求
			return
		}

		// 用户存在 将user 的信息写入上下文
		ctx.Set("user", user)
		ctx.Next() // 继续执行后面的代码
	}
}
