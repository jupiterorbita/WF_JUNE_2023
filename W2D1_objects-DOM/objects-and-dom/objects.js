// Boolean true false
// Strings "hello"
// Numbers 123 11.5
// undefined / null
// -----------------
// Arrays [1,2,3,4] 
// Objects {}

var animals = ['zebra', 'lion' , 'turtle']
var hobbies = ["basketball", "ski"]

var personArray = ["John", "Smith", 33, "🍕"]

// creating the object
var personJohnObj = {}
// console.log(personJohnObj)

// create some attributes for this obj
personJohnObj.name = "John"
personJohnObj.age = 33;

// console.log(personJohnObj)

// creating the whole obj
var car = {
    "wheels" : 4,
    "doors" : 2,
    "engine" : "v8",
    "isSportsCar" : false
}

// console.log(car)

// check the value of this obj's keys
// arr[8]
// console.log(
//     car.doors
// )

var taco1 = {
    name: "bob",
    "tortilla": "soft corn tortilla",
    "protein":  "tinga chicken",
    "cheese":   "cotija cheese",
    "toppings": ["lettuce", "pico de gallo", "guacamole"],
    "tacoInfo": function() {
        console.log(this.protein);
        console.log("Protein:  " + taco1.protein);
        console.log("Cheese:   " + taco1.cheese);
        console.log("Toppings: " + taco1.toppings);
    }
}

// dot notation
console.log(
    taco1.name
)

// bracket notation
console.log(
    taco1["name"]
)

// console.log(taco1.tacoInfo())
    
// we can now get all the delicious taco facts by
// taco1.tacoInfo(); // note we call this like a function because it is a function

