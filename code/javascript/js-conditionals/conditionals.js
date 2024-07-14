console.log("CHALLENGE #1");
//Create a constant variable called movieTitle and assign it a string with the title of a movie you like
const movieTitle = ("Game of Thrones");

//Create a constant variable called isScary and assign it either true or false
const isScary = false;

//Create a constant variable called isRomantic and assign it either true or false
const isRomantic = true;

//Write a conditional statement that will log only one of these sentences to the console: 
if (isScary && isRomantic){
    console.log(`${movieTitle} is both romantic and scary!`);
}

else if (isRomantic){
    console.log(`${movieTitle} is romantic`);
}

else if(isScary){
    console.log(`${movieTitle} is scary`);
}

else {
    console.log(`${movieTitle} is neither romantic nor scary`);
}
console.log("");

console.log("Extra challenge");
//Add another variable isFunny and see if you can represent all possible combinations
const isFunny = true;

if (isScary && isRomantic && isFunny){
    console.log(`${movieTitle} is romantic, scary and funny!`);
}
else if (isScary && isRomantic){
    console.log(`${movieTitle} is both romantic and scary!`);
}

else if(isRomantic && isFunny){
    console.log(`${movieTitle} is both romantic and funny!`);
}

else if(isScary && isFunny){
    console.log(`${movieTitle} is both scary and funny!`);
}

else if (isRomantic){
    console.log(`${movieTitle} is romantic`);
}

else if(isScary){
    console.log(`${movieTitle} is scary`);
}

else if (isFunny){
    console.log(`${movieTitle} is funny`);
}
else {
    console.log(`${movieTitle} is neither romantic nor scary`);
}
console.log("");


//Note that this adds a significant number of new options! Can you figure out how to solve it with nested conditionals? (Putting conditional statements inside of other conditionals?)
//Scary, Romantic, Funny
if (isScary){ 
    if(isRomantic){ 
        if(isFunny){ 
            console.log(`${movieTitle} is romantic, scary and funny!`);
        }
            else{
                console.log(`${movieTitle} is scary and romantic`);
        } 
    }

        else{
            console.log(`${movieTitle} is scary`);
    } 
}

    else if (isRomantic){
            if(isFunny){
                console.log(`${movieTitle} is both romantic and funny!`);
        }
                 else{
                    console.log(`${movieTitle} is romantic`);
            }

    }

    else if(isFunny){
        console.log(`${movieTitle} is funny`);
    }
            else{
                console.log(`${movieTitle} is neiher scary, romantic nor funny`);
            }

