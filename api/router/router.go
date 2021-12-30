package router

import (
	"log"
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func Start() {
	r := gin.Default()

	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"*"},
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))

	r.POST("/uploadImage", func(c *gin.Context) {
		type data_struct struct {
			UserID    string `json:"userID"`
			B64       string `json:"b64"`
			Extension string `json:"extension"`
		}

		var data data_struct

		err := c.BindJSON(&data)

		if err != nil {
			panic(err)

			c.JSON(400, gin.H{
				"message": "image failed to upload",
			})
		} else {
			log.Println(data.UserID)

			c.JSON(200, gin.H{
				"message": "image upload ok",
			})
		}
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/test", func(c *gin.Context) {
		//log.Println(&c)
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.Run(":8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
