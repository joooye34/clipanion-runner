'use strict';

const fs = require('fs')
const path = require('path')
const debug = require('debug')

const extMap = new Map([
  ['.js',() => null],
  ['.ts', () => {
    if (!process.env.DISABLE_TS_REGISTER) {
      require('ts-node/register/transpile-only')
    }
  }]
])

exports.resolveCommand = function (dir, command) {
  for (const [ext, registerFn] of extMap.entries()) {
    const filePath = path.join(dir, command + ext)
    debug('exec-c:resolve')(filePath)

    if (fs.existsSync(filePath)) {
      registerFn()
      const result = require(filePath)
      return result.default || result
    }
  }

  throw new Error('Command not found.')
}
