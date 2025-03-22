// method one

let personOne = 'Rashik';
let personTwo = 'Rayhan';

let temporary = personOne;
personOne = personTwo;
personTwo = temporary;

console.log(personOne, personTwo);


// method two(destructing)

let numOne = 11;
let numTwo = 22;

[numOne, numTwo] = [numTwo, numOne];
console.log(numOne, numTwo);