//  ***way's to declare a string***

// const rashik = 'faima';
// const bashik = "baima";
// const tashik = `maima`;
// const dashik = new String("hello world");

// console.log(typeof rashik);
// console.log(typeof bashik);
// console.log(typeof tashik);
// console.log(typeof dashik);


// ***Slice***

// const address = 'andorkilla';
// const part = address.slice(2, 5);

// console.log(part);


// ***Split***

// const sentence = 'my name is muhammad rashik chowdhury';

// console.log(sentence.split()) //shudhu split dile just ekta array te change kore dibe
// console.log(sentence.split(' ')) // specific letter diye sentence k bhag kore


// const friends = 'karim,rahim,bahim,kahim,fahim';
// console.log(friends.split(',')) // converts strings into an array



// ***join***

const friend = ['karim', 'rahim', 'bahim', 'kahim', 'fahim'];

console.log(friend.join()) // join function is only applicable for an array not for string. And by default it will join the array items with coma (,)
console.log(friend.join(' ')) 

// *********** split converts a string into an array and separate it with an individual character of VideoColorSpace. BUT join converts an array into string and join with , or | EventCounts.****************




// ***concant***

// const first = 'rashik';
// const last = 'chowdhury';

// // const fullName = first + ' ' + last; // add two variables without concat.
// const fullName = first.concat(' ').concat(last); // add two variables with concat.
// console.log(fullName);




// ***includes***

// const rashik = 'chowdhury';

// console.log(rashik.includes('x')) // it checks an array or a string the specified word or letter is peresent or not.


const sentence = 'I am learning web dev.'

let reverse = '';

for (const letter of sentence){
    // console.log(letter);
    reverse = letter + reverse;
}
console.log(reverse);