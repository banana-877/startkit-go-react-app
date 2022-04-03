package main

import (
	"api/controller"
	"api/middleware"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	engine := gin.Default()
	// ミドルウェア
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"*"}
	engine.Use(cors.New(config))
	engine.Use(middleware.RecordUaAndTime)
	Engine := engine.Group("/v1")
	{
		book := Engine.Group("/book")
		{
			book.POST("/add", controller.BookAdd)
			book.GET("/list", controller.BookList)
			book.PUT("/update", controller.BookUpdate)
			book.DELETE("/delete", controller.BookDelete)
		}
		user := Engine.Group("/user")
		{
			user.POST("/add", controller.UserAdd)
			user.GET("/list", controller.UserList)
			user.PUT("/update", controller.UserUpdate)
			user.DELETE("/delete", controller.UserDelete)
		}
	}
	engine.Run(":8080")
}
