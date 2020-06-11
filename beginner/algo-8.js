// Add Odd Integers

// Add odd integers from -25,000 to 30,000 and have the function return its final sum. Is there a short cut?

function addOddInts() {
  var sum = 0;
  for (var i = -25; i <= 30; i+=2) {
    if (i % 2 !== 0) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}

addOddInts();
