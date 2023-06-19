// console.log("hello")

// target the h1
var h1Element = document.querySelector("h1")
// console.log(h1Element)


function setColor() {
    // console.log("clicked")
    // target the input and get the user value

    var userFavColor = document.querySelector(".colorInput")
    // console.log(userFavColor.value)

    // grab the element to display
    var pTag = document.querySelector("#colorDisplay")
    pTag.innerText = "my favorite color is: " + userFavColor.value;

    // change background color based on user input
    var theBody = document.querySelector("body");
    theBody.style.backgroundColor = userFavColor.value
}


function chooseLunch(element) {
    console.log("You picked " + element.value);
}

// callback function -----------------
function message() {
    console.log("Delayed message");    
}
    
console.log("Start");
setTimeout(message, 3000)
console.log("End");