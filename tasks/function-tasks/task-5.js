// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

function odd_even(x) {
    return (x % 2 === 0) ? "Even" : "Odd";
}

console.log(odd_even(4));
console.log(odd_even(5)); 
