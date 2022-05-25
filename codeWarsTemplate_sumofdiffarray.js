/* PROBLEM STATEMENT::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Your task is to sum the differences between consecutive pairs in the array in descending order.

Example
[2, 1, 10]  -->  9
In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell ).
*/

// SOLUTION:::
//my solution 
/*

function sumOfDifferences(arr) {
  return arr.length > 1 ? Math.max(...arr) - Math.min(...arr) : 0;
}


//other solutions::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function sumOfDifferences(arr) {
  return arr.length > 1 ?
  Math.max(...arr) 
  - Math.min(...arr) : 0;
}


/* SAMPLE TESTS::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Basic tests

describe("sumOfDifferences([1, 2, 10]", function() {
    Test.assertEquals(sumOfDifferences([1, 2, 10]), 9);
  });
  
  describe("sumOfDifferences([-3, -2, -1])", function() {
    Test.assertEquals(sumOfDifferences([-3, -2, -1]), 2);
  });
  
  describe("sumOfDifferences([1, 1, 1, 1, 1])", function() {
    Test.assertEquals(sumOfDifferences([1, 1, 1, 1, 1]), 0);
  });
  
  describe("sumOfDifferences([-17, 17])", function() {
    Test.assertEquals(sumOfDifferences([-17, 17]), 34);
  });
  
  describe("sumOfDifferences([])", function() {
    Test.assertEquals(sumOfDifferences([]), 0);
  });
  
  describe("sumOfDifferences([0])", function() {
    Test.assertEquals(sumOfDifferences([0]), 0);
  });
  
  describe("sumOfDifferences([-1])", function() {
    Test.assertEquals(sumOfDifferences([-1]), 0);
  });
  
  describe("sumOfDifferences([1])", function() {
    Test.assertEquals(sumOfDifferences([1]), 0);
  });
  
  // Random tests
  
  let randomArray = (n, bound) => Array.from({length: n}, () => -bound + Math.floor(Math.random() * 2 * bound));
  let sumOfDifferencesTest = (arr) => arr.length == 0 ? 0 : Math.max.apply(null, arr) - Math.min.apply(null, arr);
  
  for (let i = 0; i < 100; i++) {
    let n = Math.floor(Math.random() * 30);
    let bound = Math.floor(Math.random() * 30);
    let randomArr = randomArray(n, bound);
    
    describe("Test for random array: [" + randomArr + "]", function() {
    Test.assertEquals(sumOfDifferences(randomArr.slice()), sumOfDifferencesTest(randomArr));
  });
  }
  */