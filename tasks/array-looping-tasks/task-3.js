// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'


var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
var str = '';

for (let num of numbers){
    str = str + num ;
}
console.log(str);