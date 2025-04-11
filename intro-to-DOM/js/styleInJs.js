let body = document.getElementsByTagName("body");
// console.log(body);
for (let bod of body){
    // console.log(bod);
    bod.style.width = "60vw";
    bod.style.margin = "auto";
    bod.style.textAlign = "center   ";
}

let sections = document.getElementsByTagName("section");
// console.log(sections);
for(let section of sections){
    // console.log(section);
    section.style.backgroundColor = "lightgray";
    section.style.padding = "8px";
    section.style.border = "2px solid black";
    section.style.marginBottom = "5px";
    section.style.borderRadius = "12px";
    // section.style.textAlign = "center";
    section.style.listStyle = "none";
    section.classList.add("font-size"); 
}

let listStyles = document.getElementsByTagName("li");
// console.log(listStyles);
for (let listStyle of listStyles){
    // console.log(listStyle);
    listStyle.style.listStyle = "none";
}   