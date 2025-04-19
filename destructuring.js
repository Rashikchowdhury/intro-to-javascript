// object destructuring 

const person = { 
    name : "Rashik",
    age : 20,
    height : "6 feet",
    profession : 'student',
    department : 'Computer Science',
};

// console.log(person.name , person.age); // normaly 

// const name = person.name; // by declaring a variable  
// const height = person.height;  // by declaring a variable 

// console.log(name);
// console.log(height);



// **** destructuring **** 
const {name, age} = person; // if we write it like this,  we will have two variable sets with the same name of object keys.

// console.log(name);
// console.log(age);


const {profession: prof , department: dept} = person; // if we want to change the variable name then we have to write it like this.

// console.log(prof);
// console.log(dept);





// *** destructuring an array ****

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(numbers[5]); // normaly


// destructuring
const [first, second] = numbers;
// console.log(first, second);

const [,, third , fourth] = numbers;
// console.log(third, fourth); // we can skip an index of array with comma like this.




// **** destructuring a function **** 
function doubleIt(a, b){
    return [a*2, b*2];
}

const [number1 , number2] = doubleIt(2, 3);
console.log(number1, number2);