function cmToFeet(cm){
    const feet = parseInt(cm / 30.48);
    const inch = (cm % 30.48) / 2.54;
    return `${feet} ft ${inch.toFixed(2)} inch`;
}

console.log(cmToFeet(170));