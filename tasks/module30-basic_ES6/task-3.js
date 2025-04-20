// ****** Practice problem 3 ********** 

/* Write an arrow function where it will do the following:

    a) Square each array elements
    b) Calculate the sum of the squared elements
    c) Return the average of the sum of squared elements.

    print the result!!!

*/


const squaredSumAverage = arr => {
    let square = 0;
    let count = 0;
    for (let num of arr) {
        square += (num * num);
        count++;
    }
    let average = square / count;
    return average;
}
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(squaredSumAverage(numbers));