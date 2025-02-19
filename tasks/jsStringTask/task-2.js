// question: Count how many times a string has the letter a or A

const str = 'javascript is an Amazing lAnguage';
let count = 0;

for (let char of str){
    if (char === 'a' || char === 'A'){
        count++;
    }
}
console.log(count);