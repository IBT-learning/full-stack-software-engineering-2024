// Challenge #1
const movieTitle = "Splash"
const isScary = false
const isRomantic = false
const isFunny = false // Extra challenge
if(isScary && isRomantic && isFunny){
    console.log(`${movieTitle} is romantic, funny and scary!`);
} else if(isScary && isRomantic){
    console.log(`${movieTitle} is both scary and romantic`);
} else if(isScary && isFunny){
    console.log(`${movieTitle} is both scary and funny`);
} else if(!isScary && isFunny && isRomantic){
    console.log(`${movieTitle} is not scary, but romantic and funny`);
} else if(isFunny && !isScary && !isRomantic)
    {console.log(`${movieTitle} is neither scary nor romantic, but it's funny`)
} else if(isScary){
    console.log(`${movieTitle} is scary`);
} else if(isRomantic){
    console.log(`${movieTitle} is romantic`);
} else if(isFunny){
    console.log(`${movieTitle} is funny`);
} else{console.log(`${movieTitle} is boring`);}

// Extra challenge 2
if( !isFunny){
    if(isRomantic && !isScary){
        console.log(`${movieTitle} is not funny but romantic. So, I love it!`);
    } else if(isScary && !isRomantic){
        console.log(`${movieTitle} is an horror movie`);
    } else if(isRomantic && isScary){
        console.log(`${movieTitle} is weird`);
    } else{console.log(`${movieTitle} is a waste of time`)}
}