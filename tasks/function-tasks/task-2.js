// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function number(x){
    let age;
    (x % 2 === 1)? age = x*2: age = x / 2;
    return age;
}

// ***alternative way
// function number(x) {
//     return (x % 2 === 1) ? x * 2 : x / 2;
// }


console.log(number(5));