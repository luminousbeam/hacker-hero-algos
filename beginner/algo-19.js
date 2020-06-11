// Count Positives

// Given array of numbers, create function to replace last value with number of positive values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.

function countPositives(arr) {
  var posCount = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      posCount++;
    }
  }
  arr[arr.length - 1] = posCount;
  // console.log(arr);
  return arr;
}

countPositives();

// Test Cases

// countPositives([-1,1,1,1]) to return [-1,1,1,3]

// countPositives([-1,-5,-5,10]) to return [-1,-5,-5,1]

// countPositives([1,2,3,2]) to return [1,2,3,4]
