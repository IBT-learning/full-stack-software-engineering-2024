const personAge = Math.floor(Math.random() * 100) + 1;
console.log(personAge);
const isAdult = personAge >= 18;
const isElderly = personAge >= 60;
console.log(isAdult, isElderly);
if (isElderly) {
  console.log("This person is elderly");
} else if (isAdult) {
  console.log("This person is an adult");
} else {
  console.log("This person is a child");
}
