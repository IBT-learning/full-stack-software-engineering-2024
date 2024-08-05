function Capitalize(word){      //return the capitalized word
    return word.toUpperCase();
}
console.log(Capitalize("blessing")) // invoking the funtion for capitalize

function percentCalc(amount, percentage){  // funtion take two argument and return the amount in percentage.
    return((amount/100) * percentage);
}
console.log(percentCalc(200, 20)); //invoking the function for percentage of 2 intergers.

function divisible(dividend, divisor){  //funtions take two argunment and check if it is divisible
    if (dividend % divisor) {
        return false;
    }
    else 
    return true;
}
console.log(divisible(10, 2));  //invoking the funtion for 2 intergers

function greeting(firstname, status){   //function takes two argrument and return a name and status given by input.
    if (status === "friends") {
        return(`hello ${firstname}!`);
    }
    else if (status === "enemy") {
        return(`go away ${firstname}!`);
    }
    else
    return(`kindly input your status ${firstname}!`);
}
console.log(greeting("Blessing")); //invoking the function for one argument
console.log(greeting("Blessing", "friends")); //invoking the function for two argunment.
