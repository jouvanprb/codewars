// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

const spinWords = (string) => {
    let arr = string.split(" ")
    console.log(arr)

    let value = ""

    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i].length)

        if (arr[i].length >= 5) {
            value += arr[i].split('').reverse().join('') + " "
        } else {
            value += arr[i] + " "
        }
    }
    return value.trim()


    // let count = arr[].length
    // console.log(count)
    // if (arr,length)
}

console.log(spinWords("Hey fellow warriors"))
console.log(spinWords("This is a test"))
console.log(spinWords("This is another test"))

module.exports = spinWords