// Find the cheapest phone from an array.

function cheapestPhone(phonesList) {
    let cheapestPhone = phonesList[0];
    for (let phones of phonesList) {
        if (phones.price < cheapestPhone.price) {
            cheapestPhone = phones;
        }
        // console.log(phones.price);
    }
    return cheapestPhone;
}

let phones = [
    { name: "Samsung", price: 25000 },
    { name: "Redmi", price: 23000 },
    { name: "Realme", price: 15000 },
    { name: "Iphone", price: 125000 },
    { name: "Walton", price: 10000 },
]

let selectedPhone = cheapestPhone(phones);
console.log("The cheapest one is:", selectedPhone);
// cheapestPhone(phones)