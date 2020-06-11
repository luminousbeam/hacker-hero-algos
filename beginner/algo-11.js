// Print Positive Index

// Given an array, write a function that prints the index value of its positive values.

// For example printPositiveIndex([1, 3, -10]), have it print/log 0, 1 (as the 0th index had a positive value and index 1 also had a positive value). printPostiiveIndex([10, 5, -5, 15]) should print/log 0, 1, and 3. In other words, it prints the index of each positive number in the array.

function printPositiveIndex(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
          console.log(i);
        }
      }
}

printPositiveIndex();

// Test Cases

// printPositiveIndex([1, 3, -10]) to log 0 1

// printPositiveIndex([10, 5, -5, 15]) to log 0 1 3

// printPositiveIndex([10, 5, 5, 15]) to log 0 1 2 3
