package main

import "fmt"

func DoubleReturn(i int)int {
	value := i * 2
	return value
}

func main() {
	result := DoubleReturn(2)
	fmt.Println(result)
}