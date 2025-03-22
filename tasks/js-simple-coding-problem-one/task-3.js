// Task-3:
// Write a function to count the number of vowels in a string.

function numOfVowels(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++;
        }
    }
    return count;
}


// ***chatgpt suggestion

// function numOfVowels(str) {
//     let count = 0;
//     for (let letter of str.toLowerCase()) {
//         if ('aeiou'.includes(letter)) {
//             count++;
//         }
//     }
//     return count;
// }


let sentence = "a quick brown fox jumps over the lazy dog";
let sentence2 = "EDUCATION";

console.log(numOfVowels(sentence));
console.log(numOfVowels(sentence2));