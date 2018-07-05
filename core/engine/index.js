#!/usr/bin/env node

const clear = require('clear')
const argv = require('yargs').argv
const command = argv._[0]

clear()

if (command === 'start') require('./start')
else if (command === 'build') require('./build')
else if (command === 'dev') require('./dev')
else console.log('command not found')
