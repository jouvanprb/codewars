package main

import (
	"strconv"
)

func SumMix(arr []any) int {
	var sum float32
	for _, ch := range arr {
		switch val := ch.(type) {
		case int:
			sum += float32(val)
		case float32:
			sum += float32(val)
		case string:
			num, err := strconv.Atoi(val)
			if err != nil {
				panic(err)
			}
			sum += float32(num)
		default:
			continue
		}
	}
	return int(sum)
}

