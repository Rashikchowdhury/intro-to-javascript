// question: Count how many times a string has the letter a

// way -1
// let sentence = 'Javascript is and amazing language';

// const a = sentence.split('a');
// const numOfA = a.length - 1;
// console.log(numOfA);

// way-2

let sentence = 'Javascript is and amazing language';
let count = 0;

for (let rashik of sentence){
    if(rashik === 'a'){
        count++;
    }
}
console.log(count)