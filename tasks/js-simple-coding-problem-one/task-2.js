// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0


function countTheNumber(arr, number){
    let count = 0;
    for(let num of arr){
        if(num === number){
            count++;
        }
    }
    return count;
}


let nums = [5,6,11,12,98, 5];
let number = 11;
console.log(countTheNumber(nums, number));