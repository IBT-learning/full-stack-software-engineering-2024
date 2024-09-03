import chalk from "chalk";
const name = "Nyawira ";
const message = "You have to fill in the form!"

console.log(chalk.blue("Hello") + " World" + chalk.red("!"));

console.log(
  chalk.green("I am a green line ") +
    chalk.blue.underline.bold("with a blue substring") +
    " that becomes green again!"
);

console.log(`
CPU: ${chalk.hex("#9d3d3d")("90%")}
RAM: ${chalk.magenta("40%")}
DISK: ${chalk.yellow("70%")}
`);

console.log("Hello" + " " + chalk.rgb(123, 45, 67)(`${name}`));

console.log(chalk.green(`${message}`));

