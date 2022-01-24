package users

type User_Model struct {
	Id    string `json:"id,omitempty" bson:"id,omitempty"`
	Email string `json:"email,omitempty" bson:"email,omitempty"`
}
