// question 4:


// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad

// Note: 
// use nested if-else-if-else

let myScore = 70;
let myFriendsScore = 30;

if (myScore > 80){
    if (myFriendsScore > 80){
        console.log("Let's go for lunch!!")
    }
    else if (myFriendsScore >= 60){
        console.log('Good luck next time.')
    }
    else if (myFriendsScore >= 40){
        console.log('Unseen massage!')
    }
    else{
        console.log('Block your friend!!')
    }
}

else{
    console.log('Go home and sleep!! and act sad!')
}