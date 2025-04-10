function waitingTime(waitingTimes, serialNumber) {
    // input validation 
    if(!(Array.isArray(waitingTimes)) || typeof serialNumber !== "number" || serialNumber < waitingTimes.length){
        return "Invalid Input"
    }

    const leftPeople = (serialNumber - 1) - waitingTimes.length;
    let timePassed = 0;
    for (let time of waitingTimes) {
        // console.log(time);
        timePassed += time;
    }
    let averageTime = timePassed / waitingTimes.length;

    let remainingTime = Math.round(averageTime) * leftPeople;
    return remainingTime;
}

console.log(waitingTime([3, 5, 7, 11, 6], 10));
console.log(waitingTime([13, 2], 6));
console.log(waitingTime([13, 2, 6, 7, 10], 6));
console.log(waitingTime([6], 4));
console.log(waitingTime(7 , 10));
console.log(waitingTime("[6,2]", 9));
console.log(waitingTime([7, 8, 3, 4, 5], "9"));
console.log(waitingTime([7, 8, 3, 4, 5], 3));