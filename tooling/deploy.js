const fs = require('fs')
const exec = require('sync-exec')
const { event, branch } = require('ci-env')

const githubToken = process.env.github_token
const nowToken = process.env.NOW_TOKEN

if (event === 'pull_request' || branch === 'master') {
  exec(`./node_modules/.bin/now-travis --file=staging-url`, { stdio: [0, 1, 2] })
  const stagingUrl = fs.readFileSync('./staging-url', 'utf8')

  let alias
  if (branch === 'master') alias = 'cosmos'
  else alias = 'cosmos-' + branch

  exec(`now-replace -t ${nowToken} ${alias} ${stagingUrl}`, { stdio: [0, 1, 2] })
}

process.on('unhandledRejection', err => {
  console.log('unhandledRejection', err)
  process.exit(1)
})
