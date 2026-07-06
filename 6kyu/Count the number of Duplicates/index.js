// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

const duplicateCount = (text) => {
    // Convert all char to array and separate by ''
    let wordArr = text.toLowerCase().split('');
    // this var for input the char were duplicate 
    let counted = []
    // duplicate for count 
    let duplicate = 0;

    for (let i = 0; i < wordArr.length; i++) {
        // This is condition count the word that ever checked to skip
        if (counted.includes(wordArr[i])) {
            continue
        }
        for (let j = i+1; j < wordArr.length; j++) {
            // console.log(`This is j : ${wordArr[j]}`)
            if (wordArr[i] == wordArr[j]) {
                // push the char to counted arr var
                counted.push(wordArr[i])
                // assign the value if found the duplicate 
                duplicate += 1
                console.log(`Duplicates char : ${wordArr[i]}`)
                break
            }
        }
    }
    return duplicate
}

console.log(duplicateCount("aabbcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));


module.exports = duplicateCount;