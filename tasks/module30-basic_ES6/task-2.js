// ******* Practice problem 2 ******

/* Write a arrow function where it will do the following:
    a) It will take an array where the array elements will be the name of your friends
    b) Check if the length of each element is even, push elements with even length to a new array and return the result.

    Print the result.
*/


// const friends = arr => console.log(arr);

const evenNames = (arr) => {
    const newFriends = [];
    for (let friend of arr){
        if (friend.length % 2 == 0){
            newFriends.push(friend);
        }
    }
    return newFriends;
}

const friends = ["Rashik", "Rayhan", "Jubayer", "Tarek", "Jakir", "Naik"];
console.log(evenNames(friends));