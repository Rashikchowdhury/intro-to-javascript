// Generate a random number between 10 to 20.

function generateRandomNumber(min, max){
    let number = console.log(Math.floor(Math.random()* (max - min - 1) + min + 1));
    return number;
}

generateRandomNumber(10, 20);