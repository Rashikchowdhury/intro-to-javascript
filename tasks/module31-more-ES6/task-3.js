// Access and then show habluder adda.
// Show output beginner

let data2 = {
    data: 
    [
        {
            bookId : 1, 
            bookDetails: {
                name: "habluder adda",
                category: "XYZ",
                price: "20$", 
            },
            bookCategory : "Basic"
        },
        {
            bookId : 2,
            bookDetails : {
                name : "gobluder adda",
                category: "ABC",
                price : "40$",
            },
            bookCategory: "Beginner",
        }
    ]
};

let hablu = data2.data[0].bookDetails.name;
console.log(hablu);

let goblu = data2.data[1].bookCategory;
console.log(goblu);