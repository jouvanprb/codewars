package main

import "fmt"

func CountBy(x, n int) []int {
	var value []int
	for i := 1; i <= n; i++ {
		value = append(value, i*x)
	}
	return value
}

func main() {
	fmt.Println(CountBy(1, 10))
	fmt.Println(CountBy(2, 5))
	// for i := range 3 {
	// 	fmt.Println("range", i)
	//}
}


