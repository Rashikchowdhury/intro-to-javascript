// reversing an array in saveral ways 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// reversed = numbers.reverse()

// console.log(reversed)


// let reversed = [];
// for (let num of numbers){
//     reversed.unshift(num);
// }

// console.log(reversed)


// let reversed = [];

// for (let i = 0; i < numbers.length; i++){
//     reversed.unshift(numbers[i]);
// }
// console.log(reversed)


let reversed = [];

for (let i = numbers.length - 1; i >= 0; i--){
    reversed.push(numbers[i]);
}   

console.log(reversed);