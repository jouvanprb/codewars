package main

import (
	"fmt"
)

func SmallestIntegerFinder(numbers []int) int {
	if len(numbers) == 0 {
		return 0
	}

	smallest := numbers[0]
	for i := 0; i < len(numbers); i++ {
		if numbers[i] < smallest {
			smallest = numbers[i]
		}
	}
	return smallest
}

func main() {
	result := SmallestIntegerFinder([]int{34, 15, 88, 2})
	result2 := SmallestIntegerFinder([]int{34, -345, -1, 100})
	fmt.Println(result)
	fmt.Println(result2)
}
