// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Additionally, if the number is negative, return 0.

// Note: If a number is a multiple of both 3 and 5, only count it once.


// The Solution
function solution(number){
    total = 0
    if (number>0){
        for (var i = 1; i < number; i++) {
            if (i % 3 == 0 || i % 5 == 0) {
                total += i
            }
        }
    } 
    else {
        total = 0;
    }
    return total;
}
var myNumb = solution(10);

console.log(myNumb)

var myNumb2 = solution(-5);
console.log(myNumb2)

