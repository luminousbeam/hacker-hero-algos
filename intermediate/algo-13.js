// Clockhand Angles

// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, returns angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. Have the degree round up as a whole number (e.g. 38 instead of 37.632...)

// For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" meaning the hour is 30 degrees, the minute and the second is 0 degree from noon.

// Similarly, clockHandAngles(10800) should return [90, 0, 0] as 10,800 seconds is equivalent to 3:00:00.

// 1 hr -> 60 mins -> 3600 secs -> 30 deg
// 1 min -> 60 secs -> 6 deg
// 1 sec -> 6 deg

function clockHandAngles(seconds) {
  var hours = Math.floor((seconds / 3600) % 12);
  console.log(`hours: ${hours}`);

  var remainingSecs = seconds % 3600;
  console.log(`remaining secs: ${remainingSecs}`);

  var minutes = Math.floor(remainingSecs / 60);
  console.log(`minutes: ${minutes}`);

  var remainingMins = remainingSecs % 60;
  console.log(`remaining minutes: ${remainingMins}`);

  var hourAngle = hours * 30;
  console.log(`initial hour angle: ${hourAngle}`);

  // 30 deg (movement per hr) / 60 min (num of mins per hr) = 2 deg movement on hour handle per minute that's passed
  var minuteEffectOnHrAngle = minutes / 2; // or minutes * 0.5
  console.log(`minute effect on hour angle: ${minuteEffectOnHrAngle}`);

  hourAngle = Math.round(hourAngle + minuteEffectOnHrAngle);
  console.log(`total hour angle: ${hourAngle}`);

  var minAngle = minutes * 6;
  console.log(`initial minute angle: ${minAngle}`);

  // 6 deg (movement per minute) / 60 sec (num of secs per min) = 0.1 deg movement on minute handle per second that's passed
  secEffectOnMinAngle = remainingMins * 0.1;
  console.log(`second effect on minute angle: ${secEffectOnMinAngle}`);

  minAngle = Math.round(minAngle + secEffectOnMinAngle);
  console.log(`total minute angle: ${minAngle}`);

  secAngle = Math.round(remainingMins * 6);
  console.log(`seconds angle: ${secAngle}`);

  return [hourAngle, minAngle, secAngle];
}

clockHandAngles();

// Test Cases

// clockHandAngles(3600) to return [30,0,0]

// clockHandAngles(10800) to return [90,0,0]

// clockHandAngles(5000) to return [42,140,120]

// clockHandAngles(8000) to return [67,80,120]

// clockHandAngles(50000) to return [57,320,120]