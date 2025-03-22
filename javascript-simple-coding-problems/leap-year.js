function leapYear(year) {
    if (year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0){
        return true;
    }
    else {
        return false;
    }
}

console.log(leapYear(2024));
console.log(leapYear(2022));