// javascript is a dynamic typed language

/*
Data types in javascript: there ar two types :

1. Primitive types --- Numbers , Strings, Boolean, Null, Undefined.
2. Non-primitive types --- Objects & Arrays.
*/


// primitive types:

let number = 10;
const name = "Rashik";
let fail = true;
let nul = null;
let roll;

console.log(typeof number, typeof name, typeof fail, typeof nul, typeof roll);


// Non-primitive types:
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let people = {
    name: "rashik", 
    profession : "Web developer",
};

console.log(Array.isArray(numbers) , typeof people);