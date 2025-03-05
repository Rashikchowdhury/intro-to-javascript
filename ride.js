/*
    Challenge

    Beginner
    Create a program that checks if someone can ride a rollercoaster. The requirements are:

    Must be at least 12 years old
    Must be taller than 150cm
    If they meet both requirements but are under 15, they need adult supervision
    Print exactly these messages for each case:

    If too young: Sorry, you're too young
    If not tall enough: Sorry, you're not tall enough
    If under 15 and no adult: Sorry, you need an adult with you
    If under 15 with adult: You can ride with adult supervision!
    If 15 or older and tall enough: You can ride by yourself!
*/

// let age = 18;
// let height = 160;
// let has_adult = false;

// let age = 11;
// let height = 135;
// let has_adult = true;

// let age = 14;
// let height = 155;
// let has_adult = true;

// let age = 13;
// let height = 172;
// let has_adult = false;

let age = 21;
let height = 175;
let has_adult = true;

if (age < 12 && height < 150){
    console.log("Sorry, you're too young");
} else if (age > 12 && height < 150){
    console.log("Sorry, you're not tall enough");
} else if (age < 15 && height > 150){
    if(!has_adult){
        console.log("Sorry, you need an adult with you");
    }
    else{
        console.log("You can ride with adult supervision!");
    }
} else if (age > 15 && height > 150){
    console.log("You can ride by yourself!");
}