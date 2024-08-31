//const cowsay = require("cowsay") //CommonJS
import cowsay from "cowsay" // ES Module

const message = cowsay.say({text: "moooo", e: "oo", r: true})
console.log (message)