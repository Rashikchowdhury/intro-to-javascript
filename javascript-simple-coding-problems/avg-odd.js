function avgOdd(numbers) {
    let add = 0;
    let count = 0;
    for (let nums of numbers) {
        if (nums % 2 === 0) {
            continue;
        }
        add = add + nums;
        count++;
    }
    return count === 0 ? 0 : (add / count).toFixed(2);
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3];
// let arr = [2, 4, 6, 8, 10, 2];
console.log("The average number of odd numbers is:", avgOdd(arr));