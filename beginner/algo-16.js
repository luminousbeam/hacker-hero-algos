// Find Max

// Given an array with multiple values, write a function that returns the maximum number in the array. For example, findMax([-3,3,5,7]) should return 7.

function findMax(arr) {
  var max = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
//   console.log(max);
  return max;
}

findMax([-3,3,5,7]);


