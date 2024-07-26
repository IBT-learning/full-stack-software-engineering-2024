// Create a constant variable called movieTitle
// Assign it a string with the title of a movie

const movieTitle = ("Breath of Life")
const isScary = false
const isRomantic = true

console.log(movieTitle);
console.log(isScary);
console.log(isRomantic);

// Writing a conditional statement that will log only one sentence to the consolet

if (! isScary && isRomantic) {
console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic) {
  console.log("Breath of Life is romantic");
} else if (! isScary) {
  console.log("Breath of Life is scary");
} else {
  console.log(`${movieTitle} is neither romantic nor scary`);
}

const isFunny = true
console.log(isFunny);

if (! isScary && isRomantic && isFunny) {
  console.log("Breath of Life is scary, romantic and funny!");
} else if (isRomantic && isFunny) {
  console.log(`${movieTitle} is both romantic and funny!`);
} else if (! isScary && isFunny) {
  console.log("Breath of Life is scary and funny!");
} else if (isFunny) {
  console.log(`${movieTitle} is funny!`);
} else {
  console.log(`${movieTitle} is neither romantic, scary, nor funny!`);
}