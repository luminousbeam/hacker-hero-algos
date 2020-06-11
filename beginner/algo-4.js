// Multiples of 7
// Print/log all the multiples of 7 between the numbers 7 to 62.

function multiplesOf7() {
  for (var i = 7; i <= 62; i++) {
    if (i % 7 === 0) {
      console.log(i);
    }
  }
}

multiplesOf7();
