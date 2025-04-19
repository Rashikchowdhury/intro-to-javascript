// ******* spread operator ("...") ************ 

// use spread operator to get the max or min number of an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));


// use spread operator to copy an array
const shonkhas = [...numbers, 11, 12, 13, 14, 15, 16];
shonkhas.push(17, 18);
shonkhas.unshift(0);
console.log(shonkhas);

// advance 
