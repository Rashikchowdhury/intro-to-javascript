function sendNotification(email) {
    // input validation
    if ( email.split("@").length !== 2){
        return "Invalid Email";
    }
    let message = email.split("@");
    return `${message[0]} sent you an email from ${message[1]}`;
}

console.log(sendNotification("zihad@gmail.com"));
console.log(sendNotification("farhan34@yahoo.com"));
console.log(sendNotification("nadim.naem5@outlook.com"));
console.log(sendNotification("fahim234.hotmail.com"));
console.log(sendNotification("sadia8icloud.com"));
console.log(sendNotification("abc@@gmail.com"));