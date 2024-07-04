const movieTitle = "Law Abiding Citizen";
const isScary = false;
const isRomantic = false;
const isFunny = false;

// if (isScary && isRomantic) {
//   console.log("This movie is Romantic and Scary");
// } else if (isScary) {
//   console.log("This movie is Scary");
// } else if (isRomantic) {
//   console.log("This movie is Romantic");
// } else console.log("This movie is neither Romantic nor Scary");

if (isScary && isRomantic && isFunny) {
  console.log("This movie is Romantic, Scary and Funny");
} else if (isScary && !isFunny && !isRomantic) {
  console.log("This movie is Scary");
} else if (isRomantic && !isScary && !isFunny) {
  console.log("This movie is Romantic");
} else if (isRomantic && isFunny) {
  console.log("This movie is Romantic and Funny");
} else if (isScary && isFunny) {
  console.log("This movie is Scary and Funny");
} else if (isFunny && !isRomantic && !isScary) {
  console.log("This movie is Funny");
} else if (isRomantic && isScary) {
  console.log("This movie is Scary and Romantic");
} else console.log("This movie is neither Romantic, Scary nor Funny");
