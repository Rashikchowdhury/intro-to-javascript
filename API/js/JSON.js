// JSON = JavaScript Object Notation.
const person = {
    name: "Rashik",
    profession: "Web Developer",
    age: 20,
    isPresent: true,
    skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'C', 'Figma'],
};

console.log(person);

const stringified = JSON.stringify(person);
console.log(stringified); 
// OUTPUT: {"name":"Rashik","profession":"Web Developer","age":20,"isPresent":true,"skills":["HTML","CSS","JavaScript","Python","C","Figma"]}

const parsed = JSON.parse(stringified);
console.log(parsed);
/*
OUTPUT:

{
  name: 'Rashik',
  profession: 'Web Developer',
  age: 20,
  isPresent: true,
  skills: [ 'HTML', 'CSS', 'JavaScript', 'Python', 'C', 'Figma' ]
}
*/
