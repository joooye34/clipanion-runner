#!/usr/bin/env node
'use strict';

const path = require('path')
const { Cli } = require('clipanion')
const { resolveCommand } = require('../lib/resolver')
const pkg = require('../package.json')
const COMMAND_NAME = process.argv[2]
if (!COMMAND_NAME) {
  console.log('Command name not found.')
  return
}

const COMMAND_DIR = process.env.COMMAND_DIR || path.join(process.cwd(), '.commands')
const CommandClz = resolveCommand(COMMAND_DIR, COMMAND_NAME)

const cli = new Cli({
  binaryName: 'cli-run',
  binaryVersion: pkg.version,
})
cli.register(Object.assign(CommandClz, { paths: [[COMMAND_NAME]] }))
cli
  .run([...process.argv.slice(2)])
  .then((code) => {
    if (code !== 0) {
      process.exit(code)
    }
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
