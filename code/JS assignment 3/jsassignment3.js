const movieTitle = "Scary Movie";
const isScary = true;
const isRomantic = false;
const isFunny = true;

if (isScary){
    if (isRomantic){
        if (isFunny){
    console.log(`${movieTitle} is romantic ,scary, and funny`)
        }else {
            console.log(`${movieTitle} is romantic and scary`)
        }
    } else {
        if (isFunny) {
            console.log(`${movieTitle} is scary and funny`)
    } else {
        console.log(`${movieTitle} is scary`)
    } 
}
} else {
    if (isRomantic){
        if (isFunny){
            console.log(`${movieTitle} is romantic and funny`)
        } else {
            console.log(`${movieTitle} is romantic`)
        }
    } else {
        if (isFunny){   
            console.log(`${movieTitle} is funny`)
        } else {
            console.log(`${movieTitle} is neither scary, romantic nor funny`)
        }
       
    }
}
