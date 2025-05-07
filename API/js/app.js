function loadData2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => console.log(data))
}

function loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data))
}

function displayPhotos(photos) {
    const ul = document.getElementById('image-titles');
    for (let photo of photos) {
        let li = document.createElement('li');
        li.innerText = photo.title;
        ul.appendChild(li);
    }
}

const loadComments = async () => {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/comments');
        let data = await res.json();
        console.log(data);
    }
    catch(error){
        console.error("You did somthing wrong:", error)
    }
    
}