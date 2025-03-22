// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

function celsiusToFahrenheit(number) {
    const fahrenheit = (number * (9 / 5)) + 32;
    return `${number}\u00B0C = ${fahrenheit}\u00B0F`;  // \u00B0C is the unicode of degree symbol.
}

let num = 100;
console.log(celsiusToFahrenheit(num));