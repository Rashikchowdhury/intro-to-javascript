// function declaration
function add(a, b){
    return a + b;
}

// function expression
const add2 = function(a, b){
    return a + b;
}

// arrow function 

const add3 = (a, b) => a + b;


// console.log(add(2, 3));
// console.log(add2(2, 3));
// console.log(add3(2, 3));

// console.log(add2);
// console.log(add3);
// console.log(add);


// arrow function without perameter.
const myName = () => console.log("Rashik");

// myName();


// arrow function with one perameter.
const myAge = person => person.age; // if an arrow function contains one perameter then we can write the perameter with parentheses or without parentheses.
// const myAge = (person) => person.age;
// console.log(myAge({name: 'rashik', age: 20,}));


// large arrow function

const arr = (num1, num2, num3) => {
    const addition = num1 + num2 + num3;
    const substraction = num1 - num2 - num3;
    const multiplication = num1 * num2 * num3;

    return addition + substraction * multiplication; // if we write a large arrow function then we have to write in the curly braces and we must have to return the final ans.
}

// console.log(arr(2, 3, 4));