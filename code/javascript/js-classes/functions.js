/*
  ? Functions: Block of code that performs a task.
  It only runs when called
  syntax
  function functionName(optional, parameters){
    code block
  }
*/

// Example 1
function greeting() {
  //this is a function without a parameter
  console.log("Hello World");
}
greeting(); //this calls the function and allows it to run

// Example 2
function salutation(personName) {
  // this is a function with a parameter
  console.log(`Bonjour, ${personName}!`);
}
salutation("Enny");

// Example 3
function add(num1, num2, num3) {
  //this function has more than one parameter, a function can have > 0 parameters with no upper limit
  console.log(num1 + num2 + num3);
}
add(15, 26, 89);

// Example 4
function clock(hour, minute) {
  if (hour > 24 || hour < 0 || minute >= 60 || minute < 0) {
    return "This is not a valid time";
  }
  let amPm = "AM";
  if (hour === 0) {
    //for 0 hour
    hour = hour + 12;
    amPm = "AM";
  } else if (hour === 12) {
    // to change from AM to PM
    amPm = "PM";
  } else if (hour > 12 && hour < 24) {
    // for afternoon till the AM
    hour = hour - 12;
    amPm = "PM";
  } else if (hour === 24) {
    //when the 24 hours is complete
    //since the clock reads from 0 to 24, it's okay to arrange the conditions in ascending order
    hour = hour - 24 + 12;
    amPm = "AM";
  }
  if (hour >= 0 && hour <= 9) {
    //for single digit hour
    hour = "0" + hour;
  }
  if (minute < 10) {
    //for single digit minute
    minute = "0" + minute;
  }

  return `The time is ${hour}:${minute} ${amPm}`;
}
console.log(clock(0, 10));

for (let hour = 0; hour <= 10; hour++) {
  for (let minute = 0; minute < 60; minute++) {
    console.log(clock(hour, minute));
  }
}
