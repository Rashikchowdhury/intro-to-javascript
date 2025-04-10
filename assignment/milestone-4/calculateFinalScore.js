function calculateFinalScore(obj) {
    // input validation
    if (typeof (obj) !== "object") {
        return "Invalid Input";
    }

    let finalScore = obj.testScore + obj.schoolGrade;
    if(obj.isFFamily == true){
        finalScore += 20;
    }
    
    if(finalScore >= 80){
        return true;
    }else{
        return false;
    }
}

let stu1 = calculateFinalScore(
    { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: true }
)

let stu2 = calculateFinalScore(
    { name: "Rajib", testScore: 45, schoolGrade: 25, isFFamily: false }
)

let stu3 = calculateFinalScore("hello")

let stu4 = calculateFinalScore(
    { name: "Rajib", testScore: 15, schoolGrade: 25, isFFamily: true }
)

console.log(stu1);
console.log(stu2);
console.log(stu3);
console.log(stu4);


// some improvement via chatGPT

// function calculateFinalScore(obj) {
//     // input validation
//     if (typeof obj !== "object" || obj === null || Array.isArray(obj)) {
//         return "Invalid Input";
//     }

//     // property validation
//     if (
//         typeof obj.name !== "string" ||
//         typeof obj.testScore !== "number" || obj.testScore > 50 ||
//         typeof obj.schoolGrade !== "number" || obj.schoolGrade > 30 ||
//         typeof obj.isFFamily !== "boolean"
//     ) {
//         return "Invalid Input";
//     }

//     let finalScore = obj.testScore + obj.schoolGrade;

//     if (obj.isFFamily === true) {
//         finalScore += 20;
//     }

//     return finalScore >= 80;
// }
