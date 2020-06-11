// Values Greater Than Second

// Write a function that accepts any array, and returns a new array with the array values that are greater than its 2nd value. If the array that was passed to the function has less than two elements, have the function return false.

// For example greaterThanSecond([1,3,5,7]) should return [5, 7]. Similarly, greaterThanSecond([0, -3, 2, 5]) should return [0, 2, 5]. Also, greaterThanSecond([2]) should return false.

function greaterThanSecond(arr) {
  var newArr = [];
  if (arr.length < 2) {
    return false;
  }
  for (let i of arr) {
    if (i > arr[1]) {
      newArr.push(i);
    }
  }
  // console.log(newArr);
  return newArr;
}

greaterThanSecond([1,3,5,7]);
