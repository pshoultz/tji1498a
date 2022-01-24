package db

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	//NOTE: project level imports
	//User_Model "github.com/pshoultz/tji1498a/api/models/users"
)

var collection *mongo.Collection
var ctx = context.TODO()

//var user_model User_Model

func Connect() {
	//var user_struct User_struct
	log.Println("trying to connect to db...")

	clientOptions := options.Client().ApplyURI("mongodb://127.0.0.1:27017")
	client, err := mongo.Connect(context.TODO(), clientOptions)

	if err != nil {
		log.Fatal(err)
	}

	err = client.Ping(context.TODO(), nil)

	if err != nil {
		log.Fatal(err)
	}

	fmt.Println("Connected to MongoDB!")

	collection = client.Database("src16-beta").Collection("users")
}

func Disconnect(m *mongo.Client) bool {
	err := m.Disconnect()

	if err != nil {
		return false
	}

	return true
}
