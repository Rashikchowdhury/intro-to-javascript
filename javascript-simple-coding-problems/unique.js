// remove all duplicate items of an array and print the unique one

function noDuplicate(arr) {
    let newArr = [];
    for (let items of arr) {
        if (newArr.includes(items) === false) {
            newArr.push(items);
        }
    }
    return newArr;
}

let str = ['Rashik', 'Rayhan', 'Ashfi', 'Rashik', 'Ashfi', 'Rayhan'];
let nums = [0, 1, 2, 3, 4, 2, 3, 4, 5, 1, 6, 7, 6, 8, 9, 10, 9];

console.log(noDuplicate(str));
console.log(noDuplicate(nums));

