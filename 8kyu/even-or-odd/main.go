package main

import "fmt"

func EvenOrOdd(number int) string {
	var result string
	switch {
	case number%2 == 0:
		result = "even"
	default:
		result = "odd"
	}
	return result
}

func main() {
	fmt.Println(EvenOrOdd(1))
}
