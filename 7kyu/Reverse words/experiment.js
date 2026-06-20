// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    // Split string to array
    let text = String(str).split('');

    // Use reverse method to reverse arr
    let textReverse = text.reverse();

    // make it reverse to string back
    let toString = textReverse.toString().replace(/,/g, '');
    // we can use it ES6 syntax instead of using regex => .replaceAll()
    console.log(toString);
}

reverseWords('apple')
reverseWords('This is an example!')