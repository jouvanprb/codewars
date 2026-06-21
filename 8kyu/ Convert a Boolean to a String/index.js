// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

function booleanToString(b){
    if (b == true) {
        console.log(b.toString());
    } else if (b == false) {
        console.log(b.toString());
    } else {
        console.log('none of boolean type')
    }
    return b.toString();
}

booleanToString(true);
booleanToString(false);
booleanToString('okee')
