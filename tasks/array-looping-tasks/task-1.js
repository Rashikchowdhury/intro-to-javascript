// Task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']



const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let revColors = [];

// for (let color of colors){
//     revColors.unshift(color)
// }
// console.log(revColors);

// for (let i = 0; i < colors.length; i++){
//     revColors.unshift(colors[i])
// }
// console.log(revColors);

let i = colors.length - 1;
while (i >= 0){
    revColors.push(colors[i]);
    i--;
}
console.log(revColors);