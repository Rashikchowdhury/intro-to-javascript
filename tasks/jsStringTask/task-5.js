// question: Capitalize Every first Letter of each word in a String

const str = 'my name is muhammad rashik chowdhury';


// console.log(str.charAt(0).toUpperCase() + str.slice(1)) //just making the first letter of this sentence to uppercase

console.log(str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')) //here .map is a type of loop(shorthand) and => is shorthand arrow function.

/* 
.map() loops through an array.
It modifies each element based on the function.
It returns a new array (original array remains unchanged).
Arrow functions (=>) make it shorter.
*/