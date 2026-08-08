package main

import "fmt"

func Maps(x []int) []int {
	var numbers []int
	for _, i := range x {
		i *= 2
		numbers = append(numbers, i)
	}
	return numbers
}

func main() {
	fmt.Println(Maps([]int{1, 2, 3}))
}
