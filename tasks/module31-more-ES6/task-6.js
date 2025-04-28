const instructor = [
    { name: 'Nodi', age: 28, position: 'Senior' },
    { name: 'Akil', age: 26, position: 'Junior' },
    { name: 'Shobuj', age: 30, position: 'Senior' },
];

let filtered = instructor.filter(person => person.position === 'Senior').map(person => person.name);
console.log(filtered);