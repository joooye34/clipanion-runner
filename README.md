# clipanion-runner

A command runner for https://www.npmjs.com/package/clipanion.

# Usage

## Installation

```
yarn add clipanion-runner
```

## Write Command

Write command to `${Your Project Dir}/.commands/hello.js` or `${Your Project Dir}/.commands/hello.ts`。

Code content like this, export default as Command Class:

```
const { Command } = require('clipanion')

exports.default = class HelloCommand extends Command {
  execute() {
    console.log('Hello World!')
  }
}
```

## Run Command

Open terminal and run this:

```
cli-run hello
```

# Options

## COMMAND_DIR

Define the custom dir to resolve command.

```
process.env.COMMAND_DIR=some_custom_dir cli-run hello
```
