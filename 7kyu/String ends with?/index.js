// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// Inputs: "abc", "bc"
// Output: true

// Inputs: "abc", "d"
// Output: false


// The Solution
function solution(str, ending){
    if (ending == "") {
        return true
    }
    if (str.slice(-ending.length) == ending) {
        return true
    } else {
        return false
    }
}

