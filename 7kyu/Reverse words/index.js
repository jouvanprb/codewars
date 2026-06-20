// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Create an empty array to store results
    const arr = [];

    // Split string to an array of word
    let text = String(str).split(' ');

    // Loop through each word, reverse it, and add to arr
    for (let i = 0; i < text.length; i++) {
        // Reverse the word: split into letters → reverse → join back
        let reverseText = text[i].split('').reverse().join('');
        arr.push(reverseText);
    }
    // Join the reversed words back with spaces
    return arr.join(' ');
    
}