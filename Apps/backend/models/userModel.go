package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName       string
	PassWord       string `gorm:"size:255;not null;default:null"`
	HashedPassWord string `gorm:"size:255;not null"`
	Email          string `gorm:"varchar(110);not null;unique;default:null"`
}
