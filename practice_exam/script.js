console.log("hello")

// Clicking on Join will Remove the Join Button.
function removeMe(el) {
    console.log(el)
    el.remove()
}

var upvote1 = 29

// clicking on any of the up arrows will increase the total up votes on each post
function upvote(who) {
    console.log(who)
    upvote1++
    console.log(upvote1)
    // now change the dom to display it
    document.querySelector("#upvoteNumber1").innerHTML = upvote1
    document.getElementById("upvoteNumber1").innerHTML = upvote1
}

function universalUpvote(id, el) {
    console.log(id, el, el.alt)
}
// ------------
// when a user clicks the GO button show an alert message with the value in the text input

function showAlert() {
    // 1. grab the input
    console.log(document.getElementById("searchInput").value)

    var userInput = document.getElementById("searchInput").value

    alert(userInput)
}