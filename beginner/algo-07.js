// Print Even 4 to 22

// Create a function that prints/logs all the even numbers from 4 to 22.
// Have it also return the sum of all the numbers that were printed.

function printEven4to22() {
  var sum = 0;
  for (var i = 4; i <= 22; i++) {
    if (i % 2 === 0) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}

printEven4to22();

// Test Cases

// printEven4to22() to log 4 6 8 10 12 14 16 18 20 22

// printEven4to22() to return 130
