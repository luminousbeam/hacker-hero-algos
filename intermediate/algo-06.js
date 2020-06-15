// Return Array Count Greater Than Y

// Given an array and a value Y, count and return the number of array values greater than Y. For example, returnArrayCountGreaterThanY( [2,3,5], 4) should return 1 as there is only one element in the array whose value is greater than 4.

function returnArrayCountGreaterThanY(arr, y) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > y) {
      count++;
    }
  }
  // console.log(count);
  return count;
}

returnArrayCountGreaterThanY();

// Test Cases

// returnArrayCountGreaterThanY( [2,3,5], 4) to return 1

// returnArrayCountGreaterThanY( [2,3,5], 1) to return 3

// returnArrayCountGreaterThanY( [4,10,15], 10) to return 1

// returnArrayCountGreaterThanY( [4,10,15], 20) to return 0
