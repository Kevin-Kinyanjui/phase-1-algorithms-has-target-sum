
const array1 = [3, 8, 12, 4, 11, 7]
const array2 = [22, 19, 4, 6, 30]
const array3 = [1, 2, 5]
const array4 = [-7, 10, 4, 8]
const array5 = [1, 2, 3, 4]
const array6 = [2, 2, 3, 3]
const array7 = [4]

function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const newJ = target - array[i]
    // look through the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      // check if it matches target
      if ((array[j]) === newJ ) {
        return true;
      }
    }
  }
  return false
}

console.log(hasTargetSum(array1, 10))
console.log(hasTargetSum(array2, 25))
console.log(hasTargetSum(array3, 4))
console.log(hasTargetSum(array4, 3))
console.log(hasTargetSum(array5, 5))
console.log(hasTargetSum(array6, 4))
console.log(hasTargetSum(array7, 4))

/* 
  Write the Big O time complexity of your function here
  O(n) + O(n) + O(n) = O(3n)  = O(n)
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
