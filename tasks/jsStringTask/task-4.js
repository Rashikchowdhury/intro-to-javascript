// question: If a given string has either x, replace x by y. if the given string has X, replace it by Y.

// Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

const str = "eXample text with x and X";


// console.log(str.split('x').join('y').split('X').join('Y')) //replacing strings using split and join 

console.log(str.replaceAll('x', 'y').replaceAll('X', 'Y')); //replacing strings using replaceAll

// console.log(str.replace(/x/g, 'y').replace(/X/g, 'Y'));
