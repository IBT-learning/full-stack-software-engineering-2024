// Challenge #1

const movieTitle = "Bridgerton"
const isScary = false;
const isRomantic = true;
const isFunny = true;

if (isRomantic && isScary && isFunny) {
    console.log(`${movieTitle} is romantic, scary, and funny!`);
} else if (isRomantic && isScary) {
    console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic && isFunny) {
    console.log(`${movieTitle} is both romantic and funny!`);
} else if (isScary && isFunny) {
    console.log(`${movieTitle} is both scary and funny!`);
} else if (isRomantic) {
    console.log(`${movieTitle} is romantic.`);
} else if (isScary) {
    console.log(`${movieTitle} is scary.`);
} else if (isFunny) {
    console.log(`${movieTitle} is funny.`);
} else {
    console.log(`${movieTitle} is neither romantic, scary, nor funny.`);
}