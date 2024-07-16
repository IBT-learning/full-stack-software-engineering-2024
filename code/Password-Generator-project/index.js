    const characters = [
        "A","B","C","D","E","F","G","H","I","J",
        "K","L","M","N","O","P","Q","R","S","T",
        "U","V","W","X","Y","Z","a","b","c","d",
        "e","f","g","h","i","j","k","l","m","n",
        "o","p","q","r","s","t","u","v","w","x",
        "y","z", "0", "1", "2", "3", "4", "5", "6", 
        "7", "8", "9","~","`","!","@","#","$","%",
        "^","&","*","(",")","_","-","+","=","{","["
        ,"}","]",",","|",":",";","<",">",".","?",
        "/"
    ]

// declare all references "set button click and display element"
const generateEl = document.getElementById("generate-el")
// const passwordEl1 = document.getElementById("password1-el")
// const passwordEl2 = document.getElementById("password2-el")
const charLengthInput = document.getElementById("charLengthInput")


// function to generate a random password from the entire array
function getRandomPassword(array, length) {
    const shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * i + 1);
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray.slice(0, length).join("");
}

// function to generate a random password without number;
function arrayWithoutNumber(array, startIndex, endIndex) {
    const before = array.slice(0, startIndex);
    const after = array.slice(endIndex);
    return before.concat(after);
}
const remainingArray = arrayWithoutNumber(characters, 52, 61);

generateEl.addEventListener("click", function() {
    displayAlertMsg(`please click the right button to select an option`)

});
function randomPasswordAll() {
    const passwordEl1 = document.getElementById("password1-el")
    const passwordEl2 = document.getElementById("password2-el")
    const password1 = getRandomPassword(characters, 15)
    const password2 = getRandomPassword(characters, 15)
    passwordEl1.textContent = password1
    passwordEl2.textContent = password2
}
function randomPasswordWithoutNumber() {
    const passwordEl3 = document.getElementById("password1-el")
    const passwordEl4 = document.getElementById("password2-el")
    const password3 = getRandomPassword(remainingArray, 15)
    const password4 = getRandomPassword(remainingArray, 15)
    passwordEl3.textContent = password3
    passwordEl4.textContent = password4
}

// Functionality for pop up message
function displayAlertMsg(message) {
    const alertContainer = document.getElementById("alertmsg-container")
    const alertMsg = document.getElementById("message-el")
    alertMsg.textContent = message;
    alertContainer.style.display = "block";
}
function hideAlertMsg() {
    const alertContainer = document.getElementById("alertmsg-container")
    alertContainer.style.display = "none";
}
// optionEl call the pop up msg when clicked
const optionEL  = document.getElementById("option-el");
optionEL.addEventListener("click", function() {
    displayAlertMsg("Do you want to include number in your password?");
});

// closeBtn close the pop up msg when clicked
const closeBtn = document.getElementById("close-btn");
closeBtn.addEventListener("click",  hideAlertMsg);

// add functionality for yes or no button
const yesBtn = document.getElementById("yes-btn");
yesBtn.addEventListener("click", function() {
    randomPasswordAll();
    closeBtn.click();
});
const noBtn = document.getElementById("no-btn")
noBtn.addEventListener("click", function() {
    randomPasswordWithoutNumber();
    closeBtn.click()
})








// set the generate button to call the function and display the password 













// charLengthInput.addEventListener("click", function() {
//     charLength = parseInt(charLengthInput.value, 10)
//     if (isNaN(charLength) || charLength < 1) {
//        charLength = 15;
//     } else if (charLength < 10 || charLength > 20) {
//         charLength = 15;
//         if (charLengthInput.value < 10) {
//         alert(`${charLengthInput.value} is too SHORT`);
//         } else if (charLengthInput.value > 20) {
//         alert(`${charLengthInput.value} is too LONG`)
//         }
//     } else {
//        charLengthInput.value = charLength
//     }
//     const password1 = getRandomPassword(characters, charLength)
//     const password2 = getRandomPassword(characters, charLength)
//     passwordEl1.textContent = password1
//     passwordEl2.textContent = password2
// })





