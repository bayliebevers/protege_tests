/**
 * Make a function which calculates the angle between the hands of a clock
 * The function takes two arguments, hours, and minutes. These will be integers between 1 - 12 and 0 - 59 respectively.
 * The hour hand is assumed to move continuously (not incrementally). 
 * So that means the the position of the hour hand is affected by the minute hand.
 * The result of the function should be the angle between the hands. The result of the function should always be >= 0 and <= 180.
 * Good luck
 */


function calculateClockAngle(hours, minutes) {// only using a 12 hour clock notation
  var MinuteHand = 0.5 * minutes,
      HourHand = 30 * hours,
      MinuteHandAngle = 6 * minutes,
      CalculateAngle = Math.abs(MinuteHand + HourHand - MinuteHandAngle);
      
}


//Using these examples should help
console.log(calculateClockAngle(1, 15))
console.log(calculateClockAngle(3, 37))
console.log(calculateClockAngle(12, 0))
console.log(calculateClockAngle(8, 8))


//NOTES
// -  For the minute hand, using 360 degrees as the entirety of the circle, each minute would rotate the hand by 6 degrees
// - using the Math.abs () function will actually calucate the angle of the hand
// - since we assume the hour hand moves continuously, the minute hand angle is what is calculated
