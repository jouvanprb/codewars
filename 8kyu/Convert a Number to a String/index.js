function numberToString(num) {
    if (typeof(num) === 'number') {
        let dataStr = num.toString();
        return dataStr;
    } else {
        return (`This data isn't supported type`)
    }
}

// test case
numberToString(20);
numberToString(-120);
numberToString(67);
console.log(numberToString('67'));

