// ***** find returns the first element that matches a condition

let friends = ["rashik", "rayhan", "jaat", "tim", "jerry"];

const newList = friends.find(frnd => frnd.length > 4);
console.log(newList);




// without find:

// function filtered(names){
//     let arr = [];
//     for (let name of names){
//         if(name.length > 4){
//             arr.push(name);
//         }
//     }
//     return arr[0];
// };

// console.log(filtered(friends));