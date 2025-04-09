// create a function that count how many cubic feet needed for making table, chairs & bed.

function numberOfWoods(numOfTables, numOfChairs, numOfBed) {
    const woodForTable = 20;
    const woodForChair = 10;
    const woodForBed = 50;

    const tableQuantity = numOfTables * woodForTable;
    const chairQuantity = numOfChairs * woodForChair;
    const bedQuantity = numOfBed * woodForBed;

    const totalWoods = tableQuantity + chairQuantity + bedQuantity;

    return totalWoods;
}

let furnitures = numberOfWoods(1, 4, 2);
console.log("total number of woods:", furnitures,"cft");