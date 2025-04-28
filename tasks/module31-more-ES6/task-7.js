const people = [
    { name: "Meena", age: 20 },
    { name: "Rina", age: 15 },
    { name: 'Suchorita', age: 22 }
];

let sum = 0; // initial value in reduce method.
for (let person of people) {
    sum += person.age;
};
// console.log(sum);

let redu = people.reduce((p, c) => p + c.age, 0);

console.log(redu);

