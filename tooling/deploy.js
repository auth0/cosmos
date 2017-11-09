const fs = require('fs')
const exec = require('sync-exec')
const { event, branch } = require('ci-env')
const githubToken = process.env.github_token

if (event === 'pull_request') {
  exec(`./node_modules/.bin/now-travis --file=staging-url`, { stdio: [0, 1, 2] })
  const stagingUrl = fs.readFileSync('./staging-url', 'utf8')

  const alias = 'cosmos-' + branch
  exec(`now-replace ${alias} ${stagingUrl}', { stdio: [0, 1, 2] })
}

process.on('unhandledRejection', err => {
  console.log('unhandledRejection', err)
  process.exit(1)
})
