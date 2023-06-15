//how do i swap 2 variables?

// var A = "grape";
// var B = "orange";
// // create a temp var to store one of the values
// var temp = A;

// // swap
// A = B;
// B = temp;
// console.log(A, B, temp)


// console.log(B + " and " + A);

//-----------------



// Reversing an array
// Write a function `reverseArray` that takes in an array, and returns the array reversed,
// try it without creating a new array



var arr1 = [11, 22, 33, 44, 55];
// arr1[2]

// expected // [55, 44, 33, 22, 11];

var arr2 = ["a", "b", "c", "d", "e"];
// ["e", "d", "c", "b", "a"];


// reverse the array and create a new array
function reverse2(genericArr) {
    //create a new array
    var newArray = [];

    // loop over the array
    for(var i = genericArr.length-1; i >= 0; i--) {
        // console.log(genericArr[i])
        // console.log(newArray)
        // as we are looping from the end
        // for each element,
        // push into the newArray
        newArray.push(genericArr[i])
    }
    // console.log(newArray)
    return newArray

}
console.log(

    reverse2(arr2)
)



function reverseArray(someArray) {
    // loop over the array
    for (var i = 0; i < someArray.length / 2; i++) {
        //    create a temp var on EVERY iteration
        var temp = someArray[i];
        someArray[i] = someArray[someArray.length -  1 - i];
        someArray[someArray.length -  1 - i] = temp;
    }
    console.log(someArray);
    return someArray;
}


// run the function
reverseArray(arr2)
reverseArray(arr1)
reverseArray(['bob', 'alice'])



// 🚨 don't forget to invoke/call the function

// use a 'for-loop' then refactor it using a 'while' loop

// we expect to get back...
// [55, 44, 33, 22, 11];
// ["e", "d", "c", "b", "a"];



//solution (using for loop):

function reverse(arr) {
    for (var i = 0; i < arr.length/2; i++) {
      var temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  
    return arr;
  }
  
  // console.log(reverse(arr))
  
  
  //solution (using while loop):
  
  function reverse(arr){
    var i = 0;
    while(i < arr.length/2){
      var temp = arr[i];
      arr[i] = arr[arr.length-1-i];
      arr[arr.length-1-i] = temp;
      i++;
    }
    return arr;
  }
  
  console.log(reverse(["a","b","c","d","e"]))

