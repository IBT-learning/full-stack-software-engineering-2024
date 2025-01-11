# Server Assignment #1: npm practice

This assignment is just to practice installing and using an npm package

### Before you begin

I added `node_modules` to the class repository's `.gitignore` file because we don't want the modules to be tracked by source control. In order for that change to apply to your repository, you must merge `main` into your personal branch.

1. checkout your personal branch
1. `git pull` to make sure it's up to date with all merged pull requests
1. `git merge origin main` will pull all changes from the remote `main` branch into your branch
1. check that it worked! One clue will be that the `.gitignore` file includes `node_modules/`
1. If it was successful, then proceed with making your assignment branch

If you run into trouble with any of these steps, reach out to Danny or Adesoji. You may proceed with this assignment, but please don't open a PR until any issues are resolved.

### Step 1: Create an npm project

1. create a new directory somewhere in your `code` folder
1. `cd` into it
1. create an `app.js` file in this directory
   - in this file, add a console log with any message
1. run `npm init -y`
1. in the new `package.json` file:
   - add a new "start" script with this value: `node --watch app.js`
   - add the line: `"type": "module",`
1. in your terminal run `npm start`; you should see the message you wrote in the `app.js`
1. press `ctrl c` or `cmd c` to end the running process in your terminal

### Step 2: Use the "chalk" package

1. run `npm install chalk`
1. in your `app.js`
   - add this line: `import chalk from "chalk"`
   - and this line: `console.log(chalk.bold("hello"))`
1. in your terminal, run `npm start`; you should see "hello" in **bold** as output
1. you can now make further changes to your `app.js` and it should automatically refresh the output in your terminal

### Step 3: Have some fun!

Check out the [usage section of the documentation](https://github.com/chalk/chalk?tab=readme-ov-file#usage) for some ideas on how to use chalk. Log at least a few lines with a few different styles!

Keep in mind that some of chalk's features are not supported in all terminals. (For example, in my terminal `yellow` and `yellowBright` are the same color.)
