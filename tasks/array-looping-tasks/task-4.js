// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person';

// let stat = statement.split(' ')

// let revWords = [];
// for (let i of stat){
//     revWords.unshift(i);
// }
// console.log(revWords.join(' '));


// another way 
let reversedStatement = statement.split(' ').reverse().join(' ');
console.log(reversedStatement);