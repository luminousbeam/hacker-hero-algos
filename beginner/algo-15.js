// Sum of Array

// Given an array of multiple values, write a function that returns the sum of its numbers. For example, findSum([1,2,3]) should return 6.

function findSum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
//   console.log(sum);
  return sum;
}

findSum([1,2,3]);
