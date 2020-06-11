// Add Seven to Most

// Build function that accepts array. Return a new array with all values except first, adding 7 to each. Do not alter the original array.

// For example, addSevenToMost([1,3,5]) should return [10, 12]. addSevenToMost([1, 3, 5, 7]) should return [10, 12, 14].

function addSevenToMost(arr) {
  var newArr = [];
  for (var i = 1; i < arr.length; i++) {
    newArr.push(arr[i] + 7);
  }
  // console.log(newArr);
  return newArr;
}

addSevenToMost([1,3,5]);
