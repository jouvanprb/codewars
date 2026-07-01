// use arrow function and oneline conditional
const numberToString = (num) => {
    return typeof(num) === 'number' ? num.toString() : `This data isn't supported type`
}

// test case
console.log(numberToString(-100));