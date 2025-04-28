// You have an odd array (array with odd numbers). [1, 3, 5, 7, 9].
// Now convert this array into an even array (array with even numbers). [2, 4, 6, 8, 10].
// Do this using for loop & array.map() method. 
// Hints: Add one to any odd number and it will become an even number.

let oddArr = [1, 3, 5, 7, 9];
let evenArr = oddArr.map(num => num + 1);

// console.log(evenArr);


let newEvenArr = [];
for (let num of oddArr){
    newEvenArr.push(num + 1);
}
console.log(newEvenArr);