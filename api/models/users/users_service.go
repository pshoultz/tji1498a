package users

import (
	"context"
	"fmt"
	"log"

	//"github.com/pshoultz/tji1498a/api/models/users"
	"github.com/pshoultz/tji1498a/api/db"
	"go.mongodb.org/mongo-driver/bson"
)

func GetUser(id string) {
	client := db.Connect()
	collection = client.Database("src16-beta").Collection("users")
	cursor, err := collection.Find(context.TODO(), bson.D{{"id", id}})
	var results bson.M

	if err = cursor.All(context.TODO(), &results); err != nil {
		log.Fatal(err)
	}

	for _, result := range results {
		fmt.Println(result)
	}

	log.Println("done....")
}

func GetUsers() {
}
