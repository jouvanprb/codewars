package main

import "fmt"

func SquareSum(numbers []int) int {
	var total int
	for i := range numbers {
		square := numbers[i] * numbers[i]
		total += square
	}
	return total
}

func main() {
	scores := []int{3, 4, 2}
	fmt.Println(SquareSum(scores))
}
