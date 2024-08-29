// Step 1: npm project: Create an app.js and 
// add a console log with any message

console.log("I am simply testing this out. It works! Impressive!");

//Step 2: Chalk Package

import chalk from "chalk";
console.log(chalk.bold("hello"));

console.log(chalk.blue('This is Ngozi Clara!'));

// Compose multiple styles using the chainable API
console.log(chalk.blue('I Love') + ' this' + chalk.red('!'));

//Thinking .hidden will hide the string. It didn't!
console.log(chalk.hidden("Will this show?"));

// Trying the background color
console.log(chalk.bgBlueBright.bold.yellow("Sweet!"));

// Checking is italic will work. It didn't
console.log(chalk.italic("Does italic work?"));

// Pass in multiple arguments
console.log(chalk.blueBright("This", "is", "really", "fun."));

// Testing Nest styles of the same type using color and underline
console.log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));

// Testing ES2015 template literal
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);

// Testing Use RGB colors in terminal emulators that support it.
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.hex('#DEADED').bold('Bold gray!'));
