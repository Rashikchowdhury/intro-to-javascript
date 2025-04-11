// we are going to add or create a completely new section using js.

let mainContainer = document.getElementById("main-container");
// console.log(mainContainer);
let newSection = document.createElement("section");
mainContainer.appendChild(newSection);

let h1 = document.createElement("h1");
h1.innerText = "This is a new section created by js";

let ul = document.createElement("ul");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

li1.innerText = "list item one";
li2.innerText = "list item two";
li3.innerText = "list item three";

ul.appendChild(h1)
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);

newSection.appendChild(ul);