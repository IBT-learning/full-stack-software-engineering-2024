const input = document.getElementById("guess-button")
const result = document.getElementById("result")

let lower = 1;
let higher = 100;
const GuessNum = 86;


function generateNum(){
    let midNum = Math.floor((lower + higher)/2);
    while (lower <= higher){
        if (midNum == GuessNum){
            return midNum;
        }
        else if (midNum > GuessNum){
            higher = midNum -1;
        }
        else{
            lower = midNum + 1;
        }
    }
    return -1; //err when num is not found
}


input.addEventListener("click", () => {
    midNum = generateNum()
    result.textContent =`Number is ${midNum}`;

    
const guess =() =>{
setTimeout(() => {
    const guessPropmt = prompt("Is the number higher than, lower than, or exactly 50?. Enter 'h', 'l' or 'c'")
    if (guessPropmt){
        if (guessPropmt === 'c'){
            alert("You're correct")
        }

        else if(guessPropmt === 'l'){
                alert("Number is lower")
                guess()      
            }

        else if(guessPropmt === 'h'){
            alert("Number is higher")
            guess()
            }

        else {
            alert("Wrong answer. Try again!")
            guess()  
        }
    }
 } , 1000)
}
guess()
})
