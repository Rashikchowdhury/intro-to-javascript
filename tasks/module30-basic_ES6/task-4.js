// **** practice problem 4 *****

/* Write an arrow function that will do the same:

    a) It will take two array input
    b) Combine the two arrays and assign them in a new array
    c) Find the maximum number of the new array and return the result.

    print the result!!!
*/


const max = (arr1 , arr2) => {
    let newArr = [...arr1, ...arr2];
    
    return Math.max(...newArr);
}

const num1List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const num2List = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(max(num1List, num2List));