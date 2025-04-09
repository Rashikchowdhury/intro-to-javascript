// make a function that counts total price of pant, shirts & shoes.
// shirt price --> 500 
// pant price --> 300;
// shoe price --> 900;

function shopping(numOfShirts, numOfPants, numOfShoes){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;

    const totalShoePrice = shoePrice * numOfShoes;
    const totalPantPrice = pantPrice * numOfPants;
    const totalShirtprice = shirtPrice * numOfShirts

    const totalPrice = totalShirtprice + totalPantPrice + totalShoePrice;

    return ` Shirts x ${numOfShirts} = ${totalShirtprice}\n Pants x ${numOfPants} = ${totalPantPrice}\n Shoe x ${numOfShoes} = ${totalShoePrice}\n ----------------\n Total price = ${totalPrice}`;
}

let shoppingList = shopping(4, 2, 2);
console.log(shoppingList);