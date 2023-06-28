/* 
    Array: Second-Largest

    Return the second-largest element of an array, or null if there is none.

    Bonus: do it with one loop and no nested loops
*/

const nums1 = [2, 3, 1, 4];
const expected1 = 3;

const nums2 = [4, 1, 3, 2];
const expected2 = 3;

const nums3 = [4, 4, 4, 1, 3, 2];
const expected3 = 3;

const nums4 = [3, 1, 4, 2];
const expected4 = 3;

const nums5 = [3, 4, 2, 1];
const expected5 = 3;

// const nums6 = [4, 3];
const nums6 = [4, 4];
const expected6 = null;

const nums7 = [2];
const expected7 = null;

const nums8 = [];
const expected8 = null;

// JSDOCS
/**
 * Finds the second largest int from the given array and returns it or null.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {?number} The second largest int from the given array or null.
 *    The ? in front means it's nullable.
 */
function secondLargest(nums = []) {
    // your code here
}

/**
 * this is a cool function that says hi
 * @author Bob
 * @returns a string
 */
function hi() {
    return "hello"
}

/**
 * this is a cool var
 */
var x = 3;






















function secLarg(nums = []) {
    // edge cases
    if (nums.length < 2) {
        return null;
    }
    // console.log(nums)

    let largest = nums[0];
    const f = {
        largest, // same as largest = largest (ES5 syntax)
        second: nums[1]
    }

    for (let element of nums) {
        // console.log(`-------> ${element} <------`)

        // if(element > f.largest ) {
        if (element > f.largest) {
            // console.log(element, " > ", f.largest)
            f.second = f.largest;
            f.largest = element;
        }
        // set second
        if (f.largest > element && element > f.second) {
            f.second = element;
        }
        // equals
        // console.log(`🚗 largest: ${f.largest} === second: ${f.second} /// ${element} `)
        if (f.largest === f.second && element < f.second) {
            // console.log("yooooooooooo")
            f.second = element

        }
        // console.log(`1️⃣  -> ${f.largest}`)
        // console.log(`2️⃣  -> ${f.second}`)

        // console.log(f)
    }
    // before we return check if all are dupes
    if (f.largest === f.second) {
        return null;
    }
    return f.second;
}

// secLarg(nums1)
// console.log(`🎈 ${secLarg(nums1)}, expected ${expected1}`)
// console.log(`🎈 ${secLarg(nums2)}, expected ${expected2}`)
// console.log(`🎈 ${secLarg(nums3)}, expected ${expected3}`)
// console.log(`🎈 ${secLarg(nums4)}, expected ${expected4}`)
// console.log(`🎈 ${secLarg(nums5)}, expected ${expected5}`)
// console.log(`🎈 ${secLarg(nums6)}, expected ${expected6}`)
// console.log(`🎈 ${secLarg(nums7)}, expected ${expected7}`)

// ===============================================
function secondLargest(nums = []) {
    if (nums.length < 2) {
        return null;
    }

    let largest = nums[0];
    let secondLargest = nums[1];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (secondLargest === largest && nums[i] < largest) {
            secondLargest = nums[i];
        }

        if (nums[i] < largest && nums[i] > secondLargest) {
            secondLargest = nums[i];
        }
    }

    // all dupes
    if (largest === secondLargest) {
        return null;
    }
    return secondLargest;
}
