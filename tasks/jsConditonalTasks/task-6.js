// question 6:

// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk

let ticket = 800;
let students = true;
let age = 30;

if(age < 10){
    console.log('Your ticket is free');
}
else if (age >= 60){
    console.log(ticket - ((ticket * 15) / 100));
}
else if (!students){
    console.log(ticket / 2);
}
else{
    console.log(ticket);
}