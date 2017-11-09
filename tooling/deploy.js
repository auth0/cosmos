const exec = require('sync-exec')
const { event } = require('ci-env')
const githubToken = process.env.github_token

if (event === 'pull_request') {
  exec(`GH_TOKEN=${githubToken} ./node_modules/.bin/now-travis`, { stdio: [0, 1, 2] })
}

process.on('unhandledRejection', err => {
  console.log('unhandledRejection', err)
  process.exit(1)
})
