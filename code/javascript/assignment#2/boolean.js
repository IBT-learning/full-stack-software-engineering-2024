

const personAge = 244
const isAdult = personAge >= 18 
const isElderly = personAge >= 60 
const isChild = personAge < 18 
let templateString = 
`is this person an adult? ${isAdult}.
 is this person elderly? ${isElderly}.
 is this person a child? ${isChild}`
console.log(templateString);