// console.log("hello from script file")

// we are making ia cool function here
function cool() {
    alert("hello from script file")
}



function example(element) {
    console.log("element clicked", element.innerHTML);
    console.log("element clicked", element.innerText);
    return "bob"
}


function turnOff(element) {
    // check the innerText of that element
    if (element.innerText == "On") {
        element.innerText = "Off";
        // change color
        element.style.backgroundColor = "red"
    } else {
        element.innerText = "On";
        element.style.backgroundColor = "green"
    }
    // element.remove()
}
