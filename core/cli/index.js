#!/usr/bin/env node

const argv = require('yargs').argv
const command = argv._[0]

if (command === 'start') require('./start')
if (command === 'build') require('./build')
