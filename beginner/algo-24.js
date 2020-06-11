// Swap Values

// Write a function that will swap the first and last values in any given array. The default minimum length of the array is 2. For example swapFirstLast([1,3,5]) should return [5, 3, 1]. swapFirstLast([1,3,5,7,9]) should return [9, 3, 5, 7, 1].

function swapFirstLast(arr) {
  var temp = arr[0];
  arr[0] = arr[arr.length - 1];
  arr[arr.length - 1] = temp;
  // console.log(arr);
  return arr;
}

swapFirstLast([1,3,5]);