// console.log("hello")
// Get the root element
var r = document.querySelector(':root');
// console.log(r)

// Get the styles (properties and values) for the root
var rs = getComputedStyle(r);
// console.log(rs)

// console.log( rs.getPropertyValue('--main-bg') )

function toggleColor() {
    // Set the value of variable --blue to another value (in this case "lightblue")
    var newColor = '#113a75'
    r.style.setProperty('--main-bg', newColor)
    r.style.setProperty('--text-color', 'white')
}

