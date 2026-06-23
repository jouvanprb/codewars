/**
 * @param {string} s
 * @return {number}
 */

// function for identify roman 
var numeric = function(x) {
    let uppercase = x.toUpperCase();
    if (uppercase == 'I') {
        return 1;
    } else if (uppercase == 'V') {
        return 5;
    } else if (uppercase == 'X') {
        return 10;
    } else if (uppercase == 'L') {
        return 50;
    } else if (uppercase == 'C') {
        return 100;
    } else if (uppercase == 'D') {
        return 500;
    } else if (uppercase == 'M') {
        return 1000;
    } return null ;
}

// Function that convert roman to Int
var romanToInt = function (s) {
    // asign total value
    let total = 0

    // loop paramater
    for (var i = 0; i < s.length; i++) {
        // assign current Value 
        let currentVal = numeric(s[i]);

        // assign next value, Get next character value (null if at last index)
        let nextVal = i < s.length - 1 ? numeric(s[i+1]) : null;
        
        // condition to get a total
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }    
    }
    
    return total;
}

console.log(romanToInt("IX"));       // Output: 9
console.log(romanToInt("LVIII"));    // Output: 58
console.log(romanToInt("MCMXCIV"));  // Output: 1994