// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(x, y){
    let sum = 0;
    for (let num of x){
        sum = sum + num;
    }
    return sum / y;
}

let arr = [1, 2, 3, 4, 5];

let ans = make_avg(arr, arr.length);

console.log(ans);