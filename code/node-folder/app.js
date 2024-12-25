import chalk from "chalk"

console.log(chalk.bold("hello"))

console.log(chalk.green.bold("HAPPY ", chalk.bgWhiteBright("INDEPENDENCE TO"), chalk.green(" NIGERIA")));

console.log((chalk.yellowBright.italic('WELCOME', 'TO', 'THE', 'WORLD', 'OF', 'TECH')));

console.log(chalk.red('Welcome to', chalk.underline.rgb(123, 45, 67).bold('IBT') + '!'));

const name = 'herdam'

const log = console.log;

log(chalk.green('Hello %s, Welcome back!'), name)

const error = chalk.bold.red;

log(error('Error: Your input is not valid'))

const success = chalk.hex('#00FF00').bold;

log(success('Success: Your input is valid'))

log(chalk.hex('#DEADED').bold('Beautiful Bold gray!'));

log(`
    CPU: ${chalk.green('90%')}
    RAM: ${chalk.red('20%')}
    BATTERY: ${chalk.yellow('70%')}
    `);

log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with an underlined blue substring') +
    ' that becomes green again at the end!'
));