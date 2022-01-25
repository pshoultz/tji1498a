package router

import (
	"bytes"
	"crypto/rand"
	"encoding/base64"
	"fmt"
	"image/jpeg"
	"os"

	"github.com/gin-gonic/gin"
	cors "github.com/rs/cors/wrapper/gin"

	//NOTE: pacakges I made
	services "github.com/pshoultz/tji1498a/api/services"
)

func Start() {
	r := gin.Default()
	r.Use(cors.New(cors.Options{
		AllowedHeaders:   []string{"Access-Control-Allow-Origin", "*"},
		AllowedMethods:   []string{"GET", "POST"},
		AllowedOrigins:   []string{"*"},
		AllowCredentials: true,
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
		c.Header("Content-Type", "image/jpeg")
		c.File("./images/asdf123/A114D185464C9EE91AE529C9835872DC.jpg")
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	r.GET("/test", func(c *gin.Context) {
		payload := services.GetUser("asdf123")

		c.JSON(200, gin.H{
			"data": payload,
		})
	})

	r.Run(":8080") // listen and serve on 0.0.0.0:8080 (for windows "localhost:8080")
}
