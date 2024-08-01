// Conditional
// a code block that only executes under certain conditions
// anything inside the parentheses will evaluate like a boolean expression
let condition
if (condition){
    // the code that executes goes inside the curly brackets
    // this is called the codeblock
    pass

} 

if (1) {
    console.log("one is true")

}

if ("") { 
    console.log("empty strings is falsey, so this wont happen")


}


let temperature = 70
let rainy = false

if (temperature < 65 && rainy) {
    console.log("Danny is grumpy!")
} else if ((temperature>=70 && rainy) || (!rainy && temperature < 65)) {
    console.log("Danny is okay!")
} else {
    console.log ("Danny is happy!")
}


if (temperature > 100){
    console.log("I am melting")
} else if (temperature > 80) {
     console.log("its pretty hot")
} else if (temperature > 65) {
      console.log("its pretty nice out")
} else if (temperature > 35) {
       console.log("at least its not raining")
}   else if ( temperature > 15) {
         console.log("Its cold out!")
}   else {
          console.log ("ITS WAY TOO COLD OUT!")
}

    

