// Subtask-1:

// Display sum of all the odd numbers from 81 to 131.

// Subtask-2:

// Display sum of all the even numbers from 206 to 311.


let odd = 81;
let sumOdd = 0;

console.log('sum of odd numbers');
while (odd <= 131){
    sumOdd = sumOdd + odd;
    odd += 2;
}
console.log(sumOdd);


console.log('sum of even numbers');

let even = 206;
let sumEven = 0;

while (even <= 311){
    sumEven = sumEven + even;
    even += 2;
}
console.log(sumEven);
