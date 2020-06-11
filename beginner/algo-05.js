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
