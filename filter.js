// filter returns all elements that match the condition as a new array.

let friends = ["rashik", "rayhan", "jaat", "tim", "jerry"];

const newList = friends.filter(frnd => frnd.length > 4);
console.log(newList);




// without filter:

// function filtered(names){
//     let arr = [];
//     for (let name of names){
//         if(name.length > 4){
//             arr.push(name);
//         }
//     }
//     return arr;
// };

// console.log(filtered(friends));