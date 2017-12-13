const fs = require('fs')
const exec = require('sync-exec')
const { event, branch } = require('ci-env')

const githubToken = process.env.github_token
const nowToken = process.env.NOW_TOKEN

if (branch === 'master') {
  exec(`NOW_ALIAS=cosmos.now.sh ./node_modules/.bin/now-travis`, { stdio: [0, 1, 2] })
}

process.on('unhandledRejection', err => {
  console.log('unhandledRejection', err)
  process.exit(1)
})
