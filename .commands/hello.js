const { Command } = require('clipanion')

exports.default = class HelloCommand extends Command {
  execute() {
    console.log('Hello World!')
  }
}
