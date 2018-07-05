#!/usr/bin/env node

const argv = require('yargs').argv
const command = argv._[0]

if (command === 'start') require('./start')
else if (command === 'build') require('./build')
else if (command === 'dev') require('./dev')
else console.log('command not found')
