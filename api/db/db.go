package db

import (
	"context"
	"fmt"
	"log"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	//NOTE: project level imports
)

var collection *mongo.Collection
var ctx = context.TODO()

func Connect() *mongo.Client {
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
	return client

	//collection = client.Database("src16-beta").Collection("users")
	//cursor, err := collection.Find(context.TODO(), bson.D{{}})
	//var results []bson.M
	//if err = cursor.All(context.TODO(), &results); err != nil {
	//	log.Fatal(err)
	//}
	//for _, result := range results {
	//	fmt.Println(result)
	//}
	//log.Println("done....")
}

//func Disconnect(m *mongo.Client) bool {
//	err := m.Disconnect(m)
//
//	if err != nil {
//		return false
//	}
//
//	return true
//}
