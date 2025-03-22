function avgEven(numbers) {
    let add = 0;
    let count = 0;
    for (let nums of numbers) {
        if (nums % 2 === 0) {
            add += nums;
            count++;
        }
    }
    return count === 0 ? 0 : add / count;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3];
console.log("The average number of even numbers is:", avgEven(arr));