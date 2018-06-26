#!/usr/bin/env node

const command = process.argv[2]

if (command === 'start') require('./serve')
