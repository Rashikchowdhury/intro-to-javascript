// question: Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for(i = 1; i <= 100; i++){
    if (Math.sqrt(i) % 1 === 0 && i != 1){
        break;
    }
    console.log(i);
}