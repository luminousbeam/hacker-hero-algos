// Sigma

// Implement function sigma(num) that given a number, returns the sum of all positive integers up to number (inclusive). Ex.:sigma(3)=6(or1 + 2 + 3); sigma(5)=15(or1 + 2 + 3 + 4 + 5).

function sigma(num) {
  var count = 0;
  for (var i = 1; i <= num; i++) {
    count += i;
  }
  return count;
}

sigma();

// Test Cases

// sigma(3) to return 6

// sigma(5) to return 15

// sigma(6) to return 21

// sigma(8) to return 36
