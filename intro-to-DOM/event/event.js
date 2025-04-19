function defaultClrs(){
    document.getElementById("change-body-clr").removeAttribute("style");
    document.getElementById("change-h1-clr").removeAttribute("style");
}

// type 1: adding function name by creating a function
function makeRed(){
    document.getElementById("change-body-clr").style.backgroundColor = "red";
    document.getElementById("change-h1-clr").style.color = "white";
}

// function makeGreen(){
//     document.getElementById("change-body-clr").style.backgroundColor = "green";
//     document.getElementById("change-h1-clr").style.color = "white";
// }


// type 4 : by creating a fuction but adding the id inside the html tag.
const blueBtn = document.getElementById("blue-btn");
blueBtn.onclick = makeBlue;

function makeBlue(){
    document.getElementById("change-body-clr").style.backgroundColor = "blue";
    document.getElementById("change-h1-clr").style.color = "white";
}


// another style of writing type 4: [we will use this sometime]
const purpleBtn = document.getElementById("purple-btn");
purpleBtn.onclick = function makePurple(){
    document.getElementById("change-body-clr").style.backgroundColor = "purple";
    document.getElementById("change-h1-clr").style.color = "white";
}


// another style {final style- we will use this one so many time} of type 4:
document.getElementById("yellow-btn").addEventListener('click', function(){
    document.getElementById("change-body-clr").style.backgroundColor = "yellow";
    document.getElementById("change-h1-clr").style.color = "white";
});