// question: Check whether a string contains all the vowels a, e, i, o, u.


const str = 'education';

let char = str.split('');

if(char.includes('a') && char.includes('e') && char.includes('i') && char.includes('o') && char.includes('u')){
    console.log(true);
}
else{
    console.log(false);
}
