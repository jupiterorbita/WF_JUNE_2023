// console.log("hello")

// function removeMe(magicalUnicorns) {
//     console.log(magicalUnicorns)
//     // remove the element from the dom
//     magicalUnicorns.remove();
// }


// Clicking on Join will Remove the Join Button.

function removeMe() {
    // 1. target what to remove

    // document.getElementById("removeThisButton").remove();

    document.querySelector("#removeThisButton").remove()
}

var vote1 = 29;
var vote2 = 17;

// clicking on any of the up arrows will increase the total up votes on each post
// function voteUp(id) {
//     console.log("vote", id)
//     if(id === 1) {
//         document.getElementById("vote1").innerHTML++;
//     } else {
//         document.getElementById("vote2").innerHTML++;
//     }
// }
function voteUp(unicorns) {
    console.log("vote", unicorns)

    document.getElementById(unicorns).innerHTML++;

    // if (unicorns === 'bob') {
    //     vote1++;
    //     document.getElementById("vote1").innerHTML = vote1;
    // } else {
    //     vote2++;
    //     document.getElementById("vote2").innerHTML = vote2;
    // }
}


// when a user clicks the GO button show an alert message with the value in the text input
function alertMe() {
    // console.log("hi")
    // document.getElementById("userInput").value
    var inputElement = document.getElementById("userInput")
    console.log(inputElement.value)

    alert(inputElement.value)
}

// - login logout ==========
function changeButton(el) {
    console.log("innerText ->", el.innerText)
    console.log("innerHTML ->", el.innerHTML)

    if (el.innerText === "Log in") {
        el.innerText = "logout"
    } else {
        el.innerText = "Log in"
    }
}