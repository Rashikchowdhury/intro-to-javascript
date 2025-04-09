// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

function smallestName(arr){
    let smallest = arr[0];
    for (let name of arr){
        if(name.length < smallest.length){
            smallest = name;
        }
    }
    return "The smallest name is: " + smallest;
}

const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

console.log(smallestName(heights2));