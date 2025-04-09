// Simple calculator to call a function inside a function.

function add(a, b){
    return a + b;
}
function substract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function devide(a, b){
    return a / b;
}

function calculator(a, b, operation){
    if (operation == 'add'){
        return add(a, b);
    }
    else if (operation == 'substract'){
        return substract(a,b);
    }
    else if (operation == 'multiply'){
        return multiply(a, b);
    }
    else if (operation == 'devide'){
        return devide(a, b);
    }
    else {
        return "Only 'add', 'substract', 'multiply', 'devide' are allowed."
    }
}

let calculate1 = calculator(10, 20, 'add')
let calculate2= calculator(10, 20, 'substract')
let calculate3 = calculator(10, 20, 'multiply')
let calculate4 = calculator(10, 20, 'devide')

console.log(calculate1);
console.log(calculate2);
console.log(calculate3);
console.log(calculate4);