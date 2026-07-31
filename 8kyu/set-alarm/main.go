package main

import "fmt"

func SetAlarm(employed, vacation bool) bool {
	if vacation == true {
		return false
	}
	if employed == true {
		return true
	}
	return false
}

func main() {
	fmt.Println(SetAlarm(false, false))
}
