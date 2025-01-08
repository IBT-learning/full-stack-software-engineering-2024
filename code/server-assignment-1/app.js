console.log("Hello Tee");

import chalk from "chalk"
console.log(chalk.bold("hello"));

console.log(chalk.bold.red("error"));

console.log(chalk.green.underline.bold("correct"));

console.log(chalk.blue("Hello","World"));

console.log(chalk.red("Hello", chalk.underline.green.bold("World") , "!"));
