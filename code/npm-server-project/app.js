console.log('practise npm')

import chalk from "chalk"
const log = console.log;
log(chalk.bold("hello"))
log(chalk.red("Hello world!"))
log(chalk.blue.bgWhiteBright.bold("Hello world!"))
log(chalk.blue.underline.bgBlack('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

const error = chalk.bold.red;
const warning = chalk.hex('#FFA500'); // Orange color

console.log(error('Error!'));
console.log(warning('Warning!'));