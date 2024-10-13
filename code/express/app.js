import chalk from "chalk";

const go = chalk.bold.green;
const slow = chalk.bold.yellow;
const stop = chalk.bold.red;

console.log(go("Go!"));
console.log(slow("Slow!"));
console.log(stop("Stop!"));
