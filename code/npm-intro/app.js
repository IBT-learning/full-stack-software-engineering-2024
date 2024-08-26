console.log("success");
import chalk from "chalk";
console.log(chalk.bold("hello"))
console.log(chalk.italic("hello chalk"))
console.log(chalk.redBright("chalk is interesting"));
console.log(chalk.greenBright('Chalk') + ' is' + chalk.blueBright(' indeed') + chalk.yellowBright.underline(' interesting') + chalk.bgMagentaBright('!'));

const error = chalk.bold.red;
console.log(error('Warning'));
const success = chalk.hex('#106206');
console.log(success('success'));

console.log((chalk.red('Hello', 'World!')));
console.log
(chalk.green(
	'green here ' +
	chalk.black.underline.bold('with a black substring') +
	' green here too'
));
import {modifierNames, foregroundColorNames} from 'chalk';

console.log(modifierNames.includes('strikethrough'));
//=> true

console.log(foregroundColorNames.includes('white'));
//=> true
console.log(foregroundColorNames.includes('purple'));
//=> false



