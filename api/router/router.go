package router

import (
	"crypto/rand"
	"encoding/base64"
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
		AllowHeaders:     []string{"*"},
		ExposeHeaders:    []string{"*"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))

	r.POST("/uploadImage", func(c *gin.Context) {
		type Data_Struct struct {
			UserID    string `json:"userID"`
			B64       string `json:"b64"`
			Extension string `json:"extension"`
		}

		var data Data_Struct
		err := c.BindJSON(&data)
		dec, err := base64.StdEncoding.DecodeString(data.B64)

		b := make([]byte, 16)

		if err != nil {
			panic(err)

			c.JSON(400, gin.H{
				"message": "image failed to upload",
			})
		} else {
			if _, err := rand.Read(b); err != nil {
				panic(err)

				c.JSON(400, gin.H{
					"message": "image failed to upload",
				})
			}

			filename := fmt.Sprintf("%X", b)
			//newPath := filepath.Join("../images/asdf123/", filename + "." data.B64)

			if err != nil {
				panic(err)
			}

			defer file.Close()

			if _, err := file.Write(dec); err != nil {
				panic(err)
			}

			if err := file.Sync(); err != nil {
				panic(err)
			}

			c.JSON(200, gin.H{
				"message": "image upload ok",
			})
		}
	})

	r.GET("/getAds", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "ads route",
		})
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
