// we can set default perameter in a function if any perameter is not provided in a function then it takes the default perameter as the argument.

function addition(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result);
    return result;
}

console.log(addition(2, 3)); // output: 2 3 5;
console.log(addition()); // output: undefined undefined NaN; generaly 'undifined' is the default perameter of a function;


// set a default function
function substraction(num1 = 2, num2 = 0){
    const result = num1 + num2;
    console.log(num1, num2, result);

    return result;
}

console.log(substraction(5, 6)); // output: 5 6 11
console.log(substraction()); // output: 2 0 2; here we set the default value of this function 2 & 0;