// Practice task 1
/*
a) Write a function that displays a message after 5s. 

b) Write a function called delayedGreeting() that takes two parameters, 
name and delay time, and logs a greeting message after the given 
delay time. 
    Input:
    delayGreeting(‘Alice’, 2000).

    Output: Hello, Alice.
*/



// ans of A:

const delayFive = () => {
    console.log("This message is 5 sec delayed");
}

// setTimeout(delayFive, 5000);


// ans of B:

const delayedGreeting = (name , time) => {
    setTimeout(() => console.log(`Hello, ${name}.`), time)
};

delayedGreeting("Ferdaus", 2000);