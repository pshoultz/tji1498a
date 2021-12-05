package router

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func Start() {
	router := gin.Default()
	fmt.Println("working....")

	//router.GET("/ping", func(c *gin.Context) {
	//	c.JSON(200, gin.H{
	//		"message": "pong",
	//	})
	//})

	//router.POST("/addImage", func(c *gin.Context) {
	//	c.JSON(200, gin.H{
	//		"message": "addImage route",
	//	})
	//})

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
