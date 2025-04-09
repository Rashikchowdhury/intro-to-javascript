// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk

function calculate(numOfLaptop, numOfTablet, numOfMobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalLaptopPrice = numOfLaptop * laptopPrice;
    const totalTabletPrice = numOfTablet * tabletPrice;
    const totalMobilePrice = numOfMobile * mobilePrice;

    const totalPrice = totalLaptopPrice + totalMobilePrice + totalTabletPrice;

    return `    Laptop x ${numOfLaptop} = ${totalLaptopPrice}
    Tablet x ${numOfTablet} = ${totalTabletPrice}
    Mobile x ${numOfMobile} = ${totalMobilePrice}
    -------------------------------
         Total = ${totalPrice}`;

}

let cal = calculate(1, 2, 3)
console.log(cal);