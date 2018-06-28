const execa = require('execa')
const ora = require('ora')
const argv = require('yargs').argv

const task = async (label, command, options) => {
  /* initiate spinner for feedback */
  const spinner = ora({ text: label, spinner: 'moon' })

  /* newline before everything */
  console.log()

  try {
    spinner.start()
    const { stdout } = await execa(command, options)
    spinner.succeed()
    if (argv.verbose) console.log(stdout)
  } catch (error) {
    console.log(error)
    spinner.fail()
    console.log(error.stderr || error.stdout)
  }

  /* newline after everything */
  console.log()
}

module.exports = task
