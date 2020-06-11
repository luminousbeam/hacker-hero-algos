// Countdown by Fives

// Log positive numbers starting at 50, counting down by fives (exclude 0).

function countdownByFives() {
  for (var i = 50; i >= 1; i--) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

countdownByFives();

// Test Cases

// countdownByFives() to log 50 45 40 35 30 25 20 15 10 5
