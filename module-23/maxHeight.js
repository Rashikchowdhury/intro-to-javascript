function getHeight(arr) {
    let maxHeight = arr[0];
    for (let num of arr) {
        if (num > maxHeight) {
            maxHeight = num;
        }
    }
    return maxHeight;

}

let heights = [40, 110, 60, 70, 20, 100, 90];
console.log("Max height is:", getHeight( heights));