// Find Min and Max

// Given an array with multiple values, write a function that returns a new array with two elements. The first value in the new array should be the minimum value in the original array. The second value in the new array should be the maximum value in the original array.

// For example, findMinMax([1,3,5]) should return [1, 5]. Similarly, findMinMax([-1,-3,10]) should return [-3, 10].

function findMinMax(arr) {
  var max = arr[0];
  var min = arr[0];
  var findMinMax = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  findMinMax.push(min, max);
  // console.log(findMinMax);
  return findMinMax;
}

findMinMax();

// Test Cases

// findMinMax([1,3,5]) to return [1,5]

// findMinMax([-1,3,5]) to return [-1,5]

// findMinMax([-1,-3,-5]) to return [-5,-1]

// findMinMax([-1, -3, 10]) to return [-3,10]
