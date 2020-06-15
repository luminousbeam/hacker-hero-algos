// Clockhand Angles

// Regardless of how hard a Dojo student works (and they should work hard), they need time now and then to unwind – like hands on a clock. Traditional clocks are increasingly uncommon, but most can still read an analog clock’s hands of hours, minutes and seconds. Create clockHandAngles(seconds) that, given a number of seconds since 12:00:00, returns angles (in degrees) of the hour, minute and second hands. As review, 360 degrees form a full rotation. Have the degree round up as a whole number (e.g. 38 instead of 37.632...)

// For input of 3600 secs (equivalent to 1:00:00), have it return "[30, 0, 0]" meaning the hour is 30 degrees, the minute and the second is 0 degree from noon.

// Similarly, clockHandAngles(10800) should return [90, 0, 0] as 10,800 seconds is equivalent to 3:00:00.

function clockHandAngles(seconds) {}

clockHandAngles();

// Test Cases

// clockHandAngles(3600) to return [30,0,0]

// clockHandAngles(10800) to return [90,0,0]

// clockHandAngles(5000) to return [42,140,120]

// clockHandAngles(8000) to return [67,80,120]

// clockHandAngles(50000) to return [57,320,120]