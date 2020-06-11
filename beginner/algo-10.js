// Print Positives

// Given an array, write a function that only prints/logs its positive value. For example printPositives([-1,3,-5, 10]) prints/logs 3, 10.

function printPositives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          console.log(arr[i]);
        }
      }
}

printPositives();

// Test Cases

// printPositives([-1,3,-5,10]) to log 3 10

// printPositives([-1,3,-5]) to log 3

// printPositives([-1,10,15]) to log 10 15
