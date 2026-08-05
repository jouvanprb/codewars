package main

import (
	"fmt"
)

func Summation(n int) string {
	var total int
	var result string
	for i := 1; i <= n; i++ {
		total += i
		if i == 1 {
			result = fmt.Sprintf("%d", i)
		} else {
			result = fmt.Sprintf("%s + %d", result, i)
		}
	}
	return fmt.Sprintf("%s = %d", result, total)
}

func main() {
	fmt.Println(Summation(8))
}
