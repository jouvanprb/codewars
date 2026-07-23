package main

import "fmt"

func GetGrade(a, b, c int) rune {
	score := (a + b + c) / 3
	switch {
	case score >= 90 && score <= 100:
		return 'A'
	case score >= 80 && score < 90:
		return 'B'
	case score >= 70 && score < 80:
		return 'C'
	case score >= 60 && score < 70:
		return 'D'
	default:
		return 'F'
	}
}

func main() {
	grade := GetGrade(70, 70, 70)
	fmt.Println(grade)
}
