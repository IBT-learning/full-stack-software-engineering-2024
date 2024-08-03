
const personAge = Math.floor(Math.random() * 101)
console.log(`Random Age: ${personAge}`)
if (personAge <18) {
    console.log("This person is a child");
}
else if (personAge <=60) {
    console.log("This person is an adult");
}
else if (personAge >=60){
    console.log("This person is elderly");
}

