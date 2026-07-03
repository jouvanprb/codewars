const pigIt = (str) => {
    let word = str.split(' ');
    
    let regex = /^[a-zA-Z]+$/;
    let result = word.map(function(str) {
        if (regex.test(str)) {
            return str.slice(1) + str[0] + 'ay';
        } else {
            return str;
        }
    })
    return result.join(' ')
}

console.log(pigIt('Pig latin is cool')); // igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // elloHay orldway !
