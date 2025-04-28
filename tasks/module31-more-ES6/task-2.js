// task-2: console log output: petersburg, Herry
let student = {
    2222: {
        name: "Jack",
        section: "C",
        class: "IX",
        address: {
            "building no": 12,
            "street": "St. Jonson",
            "city": "Peters burg",
            "country": "UK"
        }
    },
    3333: {
        name: "Herry",
        section: "D",
        class: "X",
        address: {
            "building no": 85,
            "street": "DC road",
            "city": "kachukhet",
            "country": "Bangladesh"
        }
    }
}

let petersburg = student[2222].address.city;
let herry = student[3333].name;
console.log(`${petersburg}, ${herry}`);