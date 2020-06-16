// Is Prime

// Return whether a given integer is prime. Prime numbers are only evenly divisible by themselves and 1. Many highly optimized solutions exist, but for now just create one that is easy to understand and debug.

// For example, isPrime(3) should return true. isPrime(4) should return false as 4 is divisible by 2.

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

isPrime();

// Test Cases

// isPrime(3) to return true

// isPrime(4) to return false

// isPrime(13) to return true

// isPrime(65) to return false

// isPrime(17) to return true
