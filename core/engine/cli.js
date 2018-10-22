#!/usr/bin/env node

const argv = require('yargs').argv
const command = argv._[0]

if (command === 'start') require('./cosmos-scripts/start')
else if (command === 'build') require('./cosmos-scripts/build')
else if (command === 'dev') require('./cosmos-scripts/dev')
else console.log('command not found')
