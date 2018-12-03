const { event, repo, branch, ci } = require('ci-env')
const task = require('@auth0/cosmos-scripts/task')

if (!ci) {
  console.error('This script should only run on CI')
  process.exit(1)
}

if (event !== 'push') {
  console.log('This script only runs on the "push" event, check the other build')
  process.exit(0)
}

const params = [
  'test',
  '--app-code=wuz4h54syum',
  '--storybook-addon',
  '--script-name=sandbox',
  '--exit-zero-on-changes'
]

if (repo === 'auth0/cosmos' && branch === 'master') {
  params.push('--auto-accept-changes')
}

task({
  label: 'Running chromatic',
  command: 'chromatic',
  params,
  watch: true,
  verbose: true,
  failOnError: true
})
