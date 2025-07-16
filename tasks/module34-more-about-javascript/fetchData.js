/**
 * Write an async/await function that fetch data from an api and logs a
message
 */

// const fetchJoke = () => {
//     fetch('https://v2.jokeapi.dev/joke/Programming?type=singie')
//         .then(res => res.json())
//         .then(err => console.log(err))
// };


const loadJoke = async () => {
    try {
        let response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=singie');
        let data = await response.json();
        console.log(data.joke);
    }
    catch(err){
        alert(`Error occured: status - ${err}`);
    }
};