// You are given an array say: [33, 50, 79, 78, 90, 101, 30].
// now return/get all the elements which are divisible by 10 using array.filter() method.

// now di the same task of question 2. But do this using array.find() method. Then compare the output of question 2 & question 3.

let arr = [33, 50, 79, 78, 90, 101, 30];

let filteredArr = arr.filter(num => num % 10 === 0);
// console.log(filteredArr);


let newArr = arr.find(num => num % 10 === 0);
console.log(newArr);