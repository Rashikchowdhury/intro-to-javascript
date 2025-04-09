// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];


function getMin(arr){
    const minNum = Math.min(...arr);
    return "The lowest number is: " + minNum;
}

const heights2 = [167, 190, 120, 165, 137];

console.log(getMin(heights2));