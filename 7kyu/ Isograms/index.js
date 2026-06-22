// // An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const isIsogram = function(str) {
    const lower = str.toLowerCase()
    for (var i = 0; i < lower.length; i++) {
        for (var j = i + 1; j < lower.length; j++) {
            if (lower[i] === lower[j]) {
                return false;
            }
        }
    }
    return true;
}

// Test case
const str1 = isIsogram('Dermatoglyphics');
console.log(str1);

const str2 = isIsogram('aba');
console.log(str2);

const str3 = isIsogram('moOse');
console.log(str3);


