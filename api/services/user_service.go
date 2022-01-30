package services

import (
	"context"
	"log"

	"github.com/pshoultz/tji1498a/api/db"
	models "github.com/pshoultz/tji1498a/api/models"
	"go.mongodb.org/mongo-driver/bson"
)

func GetUser(id string) *models.User_Model {
	var user_model models.User_Model
	client := db.Connect()
	collection := client.Database("src16-beta").Collection("users")
	err := collection.FindOne(context.TODO(), bson.D{{"id", id}}).Decode(&user_model)

	if err != nil {
		log.Println(err)
	}

	closed := db.Disconnect(client)

	if !closed {
		log.Println("db failed to disconnect")
	} else {
		log.Println("db disconnected")
	}

	return &user_model
}

func GetUsers() {
}
