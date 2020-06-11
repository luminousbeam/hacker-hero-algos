// This Length, That Value

// Given two numbers passed to the function, return a new array of length num1 with each value num2. For example, thisLengthThatValue(3,5) should return [5, 5, 5]. thisLengthThatValue(2, 10) should return [10, 10].

function thisLengthThatValue(num1, num2) {
  var arr = [];
  for (var i = 0; i < num1; i++) {
    arr.push(num2);
  }
  // console.log(arr);
  return arr;
}

thisLengthThatValue();

// Test Cases

// thisLengthThatValue(3,5) to return [5,5,5]

// thisLengthThatValue(2,10) to return [10,10]

// thisLengthThatValue(3,10) to return [10,10,10]

// thisLengthThatValue(1,55) to return [55]

// thisLengthThatValue(10,2) to return [2,2,2,2,2,2,2,2,2,2]
