const person = {
    name: 'Rashik',
    age: 19,
    profesion: 'web developer',
    height: '6 feet',
    weight: '68kg',
    education: {
        school: 'Baitush sharaf',
        college: 'Ctg college',
        course: 'Programming Hero',
        university: {
            uni1: 'ctg university',
            uni2: 'premier university',
        }
    }
}

// delete person.education.university.uni1;
// console.log(person.education.university)
// const uni1 = person.education.university.uni2;
// console.log(uni1);

// console.log(Object.keys(person));
delete person.education;
// console.log(Object.values(person));

// for of: arrya er jnno
// for in: object er jnno. but 2 taii same

for (const value in person){
    // console.log(Object.keys(person));
    // console.log(value);
    console.log(value + ': ' + person[value])
}
// console.log(person.value)