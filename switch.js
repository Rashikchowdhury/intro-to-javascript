/* 
********* Switch Statement

The switch statement is another way to control the flow of your program based on different conditions. It's similar to using if-else if-else, but it can be more concise and readable in certain situations.

Here's how the switch statement works:

switch (expression) {
    case value1:
        // Code to execute if expression matches value1
        break;
    case value2:
        // Code to execute if expression matches value2
        break;
    // ... more cases ...
    default:
        // Code to execute if no case matches
}
The expression is evaluated once.
The value of the expression is compared with the values of each case.
If there is a match, the associated block of code is executed.
The break statement is used to exit the switch statement. Without it, execution would continue to the next case.
The default case is optional. It's executed if no other case matches.
Here's an example:

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Sunday";
        break;
    case 2:
        dayName = "Monday";
        break;
    case 3:
        dayName = "Tuesday";
        break;
    // ... cases for other days ...
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Tuesday
In this example, the switch statement checks the value of day. Since day is 3, the case for 3 is executed, setting dayName to "Tuesday". 
******
*/

// Create a program that converts a number grade to a letter grade using a switch statement. The program should do the following:

// You are given a user input, a number grade (0-100) stored in a variable.
// Use a switch statement to determine the corresponding letter grade based on these ranges:
// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// 0-59: "F"
// Print the letter grade.
// Handle invalid input (numbers outside the 0-100 range) by printing "Invalid grade".