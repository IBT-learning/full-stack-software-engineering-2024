# npm: Node Package Manager

**npm** is the tool we will use to install "packages" into our projects. A package is just some JS code that someone else wrote and published. By installing it, we can use tools that others wrote, without having to write everything from scratch ourselves.

npm is a program that exists on your computer, it came with node. "npm" can also refer to "the npm registry", which is like the remote repository of all public npm packages. The npm organization is responsible for hosting and distributing public npm packages.

We can install any npm package into _any npm project_. An npm project is just a directory on your file system, with a properly configured `package.json` in it.

### To make a new npm project:

- create a new folder for your project
- `cd` into it
- run `npm init` or `npm init -y`
  - this creates a package.json file
  - the presence of a package.json file is what makes a folder an "npm project"
- specify a bash script by adding it to "scripts" in the package.json
  - you will need at least a "start" script, and maybe a "dev" script
- add `"type": "module",` to enable ES Modules
- install dependencies / packages
  - install existing dependencies with `npm install` or `npm i`
  - install new dependencies with `npm install <package-name>`
- run your project by running one of the scripts you wrote, such as `npm start` or `npm run dev`

## Important things to remember

- Everything is just files
- There is nothing you can't fix with `rm -rf node_modules` and `npm i`
- **YOUR WORKING DIRECTORY MATTERS!!**
  - Wherever your terminal is when you run `npm init`, that's where the package.json gets made
  - When you run a script such as `npm start` it will look for the nearest ancestor package.json with a matching script defined. If you accidentally make nested npm projects, it can get confusing!
