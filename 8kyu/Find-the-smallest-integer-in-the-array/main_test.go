package main

import "testing"

func TestSmallestIntegerFinder(t *testing.T) {
	// Test case 1
	result := SmallestIntegerFinder([]int{34, 15, 88, 2})
	expected := 2
	if result != expected {
		t.Errorf("Expected %d but got %d", expected, result)
	}

	// Test case 2
	result = SmallestIntegerFinder([]int{34, -345, -1, 100})
	expected = -345
	if result != expected {
		t.Errorf("Expected %d but got %d", expected, result)
	}
}
