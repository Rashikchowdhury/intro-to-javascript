// ******* spread operator ("...") ************ 

// use spread operator to get the max or min number of an array

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Math.max(...numbers));
// console.log(Math.min(...numbers));


// use spread operator to copy an array
const shonkhas = [...numbers, 11, 12, 13, 14, 15, 16];
shonkhas.push(17, 18);
shonkhas.unshift(0);
// console.log(shonkhas);

// advance 
const person = {
    name: "Rashik",
    profession: "Web Developer",
    firm: "Monster Studio",
    post: "Front-end Developer",
    age: 20,
    info: {
        education: "BSc in CSE",
        institute: "Premier University, Chattogram",
        session: "Spring 2025",
    }
};

const {name , firm, ...remaining} = person;

// console.log(name , firm);
console.log(remaining);