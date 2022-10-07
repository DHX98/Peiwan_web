package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	UserName       string
	PassWord       string
	HashedPassWord string `gorm:"size:255;not null"`
	Email          string
}
