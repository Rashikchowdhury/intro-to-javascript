// forEach is a JavaScript array method that executes a given function once for each element without returning a new array.

let users = ['Alice', 'Bob', 'Charlie'];

users.forEach(
    function (user) {
        console.log(`Welcome, ${user}!`);
    }
);



/*
Q. What is the basic difference between forEach and map in JS?

--- Now, the basic difference is:

    forEach is used to perform an action on each element of an array.
    It does not return anything (it always returns undefined).

    map is used to transform each element of an array and creates a new array with the transformed elements.
    It returns a new array without changing the original one.

*/