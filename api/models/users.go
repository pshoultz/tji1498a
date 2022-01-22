package models

type Users struct {
	Id    string `bson:"id,omitempty" json:"id,omitempty"`
	Email string `bson:"email,omitempty" json:"email,omitempty"`
}
