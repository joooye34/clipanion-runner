import { Command } from 'clipanion'

export default class HelloCommand extends Command {
  async execute() {
    console.log('Hello TypeScript World!')
  }
}
