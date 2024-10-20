import chalk from "chalk";

// console.log(
//   "I am having so much fun learning new things about software engineering"
// );

console.log(chalk.bold("hello there, what is your name?"));
const log = console.log;
log(
  chalk.yellow("Hi there,") +
    chalk.green("can you tell me the,") +
    chalk.red.underline.bold.bgMagenta("time?")
);
const fullName = "Solomon Ojiako";
log(`${chalk.bold.underline.yellow(fullName)}`);
