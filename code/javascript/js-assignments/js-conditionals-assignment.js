const movieTitle = "Deadpool";
const isScary = 0; // 0 = false
const isRomantic = 0;
const isFunny = 1; //1 = true for boolean
if (isRomantic && isScary && isFunny) {
  console.log(movieTitle + " is romantic, scary and funny!");
} else if (isRomantic && isScary) {
  console.log(movieTitle + " is romantic and scary!");
} else if (isScary) {
  console.log(movieTitle + " is scary!");
} else if (isRomantic) {
  console.log(movieTitle + " is romantic!");
} else if (isFunny) {
  console.log(movieTitle + " is funny!");
} else {
  console.log(movieTitle + " is meh!");
}
