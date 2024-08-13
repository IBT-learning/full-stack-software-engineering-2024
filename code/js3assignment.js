// CHALLENGE 1
// PART A
const movieTitle = "Atlas"
const isScary = false
const isRomantic = false
if (isRomantic == true && isScary == true) {
    console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic == true)  {
    console.log(`${movieTitle} is romantic`);
} else if (isScary == true) {
    console.log(`${movieTitle} is scary`);
} else {
    console.log(`${movieTitle} is neither romantic nor scary`);
}

// PART B - Extra Challenges
// 1. 
const isFunny = false
if (isFunny == true && isRomantic == true && isScary == true) {
    console.log(`${movieTitle} is funny, romantic and scary`);
} else if (isRomantic == true && isScary == true) {
    console.log(`${movieTitle} is both romantic and scary!`);
} else if (isRomantic == true && isFunny == true)  {
    console.log(`${movieTitle} is funny and romantic`);
} else if (isScary == true && isFunny == true) {
    console.log(`${movieTitle} is funny and scary`);
} else {
    console.log(`${movieTitle} is not funny, romantic or scary`);
}

// 2.
const isFunny1 = true
const isRomantic1 = true      
const isScary1 = true

// the else statements start being executed from the innermost if clause ie. it checks if the the if clause is true or false as it moves to the outer if clause till it gets to the first if clause, so check for that when writing the else conditions 

if (isFunny1) {
        if (isRomantic1) {
            if (isScary1) {
                console.log(`${movieTitle} is funny, romantic and scary`);
            } else {
                console.log(`${movieTitle} is both funny and romantic`);  //checks if isScary1 is false
            }
        } else {
            console.log(`${movieTitle} is both funny and scary`);  //checks if isRomantic1 is false
        }
    } else {
        console.log(`${movieTitle} is both romantic and scary`);  //checks if isFunny1 is false
        } 
//  TODO: how do I add the fifth condition - is not funny, romantic or scary


