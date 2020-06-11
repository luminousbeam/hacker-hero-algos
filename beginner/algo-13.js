// Squares

// Given an array with multiple values, write a function that replaces each value in the array with the product of the original value multiplied by itself. For example squareVal( [1, 3, 5] ) should return [1, 9, 25].

function squareVal(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
//   console.log(arr);
  return arr;
}

squareVal([1, 3, 5]);
