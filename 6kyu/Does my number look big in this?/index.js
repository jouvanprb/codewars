// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:
//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// and 1652 (4 digits), which isn't:
//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

function narcissistic(value) {
    // declare total var
    let total = 0;

    // count value length
    power = String(value).length;

    // convert string to array
    let digits = String(value).split('').map(Number);

    // loop array and count the total
    for (let digit of digits) {
        total += digit ** power;
    } 
    return total === value;
}
