const pigIt = (str) => {
    let word = str.split(' ');
    
    let regex = /^[a-zA-Z]+$/;
    let result = word.map(str =>{
        if (regex.test(str)) {
            return str.slice(1) + str[0] + 'ay';
        } else {
            return str;
        }
    })
    return result.join(' ')
}

pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !


module.exports = pigIt;