const makeRed = document.getElementById("make-red");

makeRed.addEventListener('click', function(){
    document.body.style.backgroundColor = "red";
    document.getElementById("make-red").style.backgroundColor = "white";
    document.getElementById("make-red").style.color = "red";
    document.querySelector("h1").style.color = "white";
});

const updateBtn = document.getElementById("update-btn");

updateBtn.addEventListener('click', function(){
    let inputFeild = document.getElementById("input-field");
    let inputText = inputFeild.value;

    document.getElementById("h1").innerText = inputText;
    inputFeild.value = "";
})  