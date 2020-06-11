// Find Min

// Given an array with multiple values, write a function that returns the minimum value in the array. For example findMin([0,3,-5]) should return -5.

function findMin(arr) {
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  // console.log(min);
  return min;
}

findMin([0, 3, -5]);
