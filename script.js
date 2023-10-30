// const arr=[1,2,3,4,5]
// console.log(arr.reduce((a,b)=>a+b));

// const Anar={
//     name: "Anar",
//     lastname:"Muradov",
//     age: 19,

//     fullName : function() {
//         return this.name + " " + this.lastname;}
// }
// const prp=prompt("daxil et")
// console.log(Anar[prp]);

// console.log(Anar.fullName );
// console.log(Anar.name);


const arr = [
    {
        "id": 2,
        "description": "Sweet and savory sauces relishes spreads and seasonings",
        "name": "Condiments"
    },
    {
        "id": 1,
        "description": "Soft drinks coffees teas beers and ales",
        "name": "Beverages"
    },
    {
        "id": 3,
        "description": "Desserts candies and sweet breads",
        "name": "Confections"
    },
    {
        "id": 4,
        "description": "Cheeses",
        "name": "Dairy Products"
    },
    {
        "id": 5,
        "description": "Breads crackers pasta and cereal",
        "name": "Grains/Cereals"
    },
    {
        "id": 6,
        "description": "Prepared meats",
        "name": "Meat/Poultry"
    },
    {
        "id": 7,
        "description": "Dried fruit and bean curd",
        "name": "Produce"
    },
    {
        "id": 8,
        "description": "Seaweed and fish",
        "name": "Seafood"
    }
]
// for (let i = 0; i < arr.length; i++) {
//    if (arr[i].id>3 && arr[i].name.includes("P") ) {
//     console.log(arr[i]);
//    }
// }
// console.log("++++++++++++++++++++++++++++++++++++++++++++++++");
// arr.forEach(x => {
//     if (x.id>3 && x.name.includes("P") ) {
//         console.log(x);
// }});

// console.log("++++++++++++++++++++++++++++++++++++++++++++++++");

// const newArr=arr.filter(x=>x.name.toLowerCase().includes("me".toLowerCase()))
// console.log(newArr);

// arr.sort((a,b) => (a.id > b.id) ? 1 : ((b.id > a.id) ? -1 : 0))
// console.table(arr);



// arr.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
// console.table(arr);



// arr.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))
// console.table(arr);