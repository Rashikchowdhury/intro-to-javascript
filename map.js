// map => Loops through each elements of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the array.

// ******** without map:
// function doubleIt(num){
//     let arr = [];
//     for (let no of num){
//         arr.push(no * 2);
//     }
//     return arr;
// }

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(doubleIt(numbers));


// type one
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function doubleIt(num){
//     return num * 2;
// }

// const doubled = numbers.map(doubleIt);
// console.log(doubled);

// type two:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const doubleIt = num => num * 2;

// const doubled = numbers.map(doubleIt);
// console.log(doubled);


// type three
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const doubled = numbers.map(num => num * 2);
// console.log(doubled);