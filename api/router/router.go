package router

import (
	"fmt"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Start() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"*"},
		AllowHeaders:     []string{"Access-Control-Allow-Origin"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))

	r.POST("/addImage", func(c *gin.Context) {
		fmt.Println()
		//file, header, err := c.Request.FormFile("upload")
		//filename := header.Filename
		//fmt.Println(header.Filename)
		//out, err := os.Create("../images/asdf123" + filename + ".jpg")
		//if err != nil {
		//	log.Fatal(err)
		//}
		//defer out.Close()
		//_, err = io.Copy(out, file)
		//if err != nil {
		//	log.Fatal(err)
		//}

		c.JSON(200, gin.H{
			"message": "add image route hit",
		})
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/test", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.Run() // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
