const wordList = ["every", "word", "in", "this", "array", "should", "be", "capitalized"]
for (const x of wordList) {
    console.log(x.charAt(0).toUpperCase() + x.slice(1))
    
}
// challenge 2
 
 for (let i = 0; i < 10; i++) {
     if(i % 3 == 0){
        console.log(i + " is true")
     }
    
 }

 // challenge 3
 
 for (let i = 1; i <= 40; i++) {
    if (i % 3 == 0 && i % 5 == 0){
        console.log("fizzbuzz")
    }
    
    else if (i % 5 == 0){
        console.log("buzz")
    }
    else if (i % 3 == 0){
        console.log("fizz")
     }
    else{
        console.log(i)
    }
   
}



