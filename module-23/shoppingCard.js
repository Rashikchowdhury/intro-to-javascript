// Calculate the total cost of the products in a shopping card.

function shoppingCost(products) {
    totalPrice = 0;
    for (let product of products) {
        productPrice = product.price * product.quantity;
        totalPrice = totalPrice + productPrice;
    }
    return `
    ${products[0].name} x ${products[0].quantity} = ${products[0].price * products[0].quantity}
    ${products[1].name}  x ${products[1].quantity} = ${products[1].price * products[1].quantity}
    ${products[2].name}   x ${products[2].quantity} = ${products[2].price * products[2].quantity}
    ${products[3].name}    x ${products[3].quantity} = ${products[3].price * products[3].quantity}
    ------------------
          Total = ${totalPrice}
    `;
}

let products = [
    { name: "Shampoo", price: 120, quantity: 2 },
    { name: "Ciruni", price: 30, quantity: 1 },
    { name: "Shirt", price: 400, quantity: 2 },
    { name: "Pant", price: 600, quantity: 2 },
]

let shopping = shoppingCost(products);
console.log(shopping);