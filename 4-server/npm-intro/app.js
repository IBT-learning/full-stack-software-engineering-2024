// in order to use the packages we install, we must first import them with require()
// the variable name doesn't have to match the package
// but the string passed to require() DOES have to match

// const cowsay = require("cowsay") // CommonJS style import
import cowsay from "cowsay" // ES Module style import

// every package will look different, and have different attributes
// here we can see that cowsay is just an object with 3 methods
console.log(cowsay)
// {
//     say: [Function (anonymous)],
//     think: [Function (anonymous)],
//     list: [Function (anonymous)]
// }

// the .say() and .think() methods each take an object with display options
// and return a string (configured by the given options)
// we can find out these details from the documentation
// (on npmjs.com, github, or by hovering over the method in VSCode)
const message = cowsay.say({ text: "blub blub", e: "oO" })

console.log(message)
