package main

import (
	"fmt"
)

func Rps(p1, p2 string) string {
	choice := map[string]string{
		"rock":     "scissors",
		"scissors": "paper",
		"paper":    "rock",
	}
	if p1 == p2 {
		return "draw"
	}

	if choice[p1] == p2 {
		return "Player 1 won"
	}

	return "player 2 won"
}

func main() {
	fmt.Println(Rps("rock", "paper"))
}
