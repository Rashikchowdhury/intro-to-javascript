// ******* Practice problem 1 *******

// 1.1- Write a arrow function that will take three parameters, will multiply the parameters and will return the result.

const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(1, 2, 3));


/*  1.2- Write the following sentence in three lines and print the result:
        I am a Web developer. I love to code. I love to eat biriyani.
*/

// console.log(`I am a Web developer.
// I love to code.
// I love to eat biriyani.`);



/* 1.3- Write a arrow function that will take two parameters: One parameter will come from you and the other one will a default parameter.
    add this two parameters and return the result.
*/

const addition = (num1, num2 = 9) => num1 + num2;

console.log(addition(1));