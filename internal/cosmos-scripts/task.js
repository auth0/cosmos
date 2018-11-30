const execa = require('execa')
const ora = require('ora')
const argv = require('yargs').argv

const task = async ({ label, command, params, watch, failOnError }) => {
  /* initiate spinner for feedback */
  const spinner = ora({ text: label, spinner: 'moon' })

  /* newline before everything */
  console.log()

  try {
    spinner.start()

    if (watch) {
      const response = execa(command, params)

      /* pipe all output to the console */
      if (argv.verbose) {
        response.stdout.pipe(process.stdout)
        response.stderr.pipe(process.stderr)
      }
    } else {
      const { stdout } = await execa(command, params)
      spinner.succeed()
      if (argv.verbose) console.log(stdout)
    }
  } catch (error) {
    console.log(error)
    spinner.fail()

    console.log(error.stderr || error.stdout)
    if (failOnError) process.exit(1)
  }

  /* newline after everything */
  console.log()
}

module.exports = task
