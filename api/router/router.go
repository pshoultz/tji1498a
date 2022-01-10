package router

import (
	"bytes"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"image/jpeg"
	"log"
	"os"
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
		b := make([]byte, 16)
		dec, err := base64.StdEncoding.DecodeString(data.B64)

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

			switch data.Extension {
			case "jpg":
				r := bytes.NewReader(dec)
				img, err := jpeg.Decode(r)
				f, err := os.OpenFile("./images/"+data.UserID+"/"+filename+"."+data.Extension, os.O_WRONLY|os.O_CREATE, 0777)
				if err != nil {
					panic("Cannot open file")
				}

				jpeg.Encode(f, img, nil)

				//case "png":
				//	r := bytes.NewReader(dec)
				//	img, err := png.Decode(r)
				//	f, err := os.OpenFile("./images/"+data.UserID+"/"+filename+"."+data.Extension, os.O_WRONLY|os.O_CREATE, 0777)
				//	if err != nil {
				//		panic("Cannot open file")
				//	}

				//	png.Encode(f, img, nil)

			}

			c.JSON(200, gin.H{
				"message": "image upload ok",
			})
		}
	})

	r.GET("/getAds", func(c *gin.Context) {
		var userID = c.Query("userID")
		log.Println(userID)
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
