const { basename } = require('path')

const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1)

module.exports = {
  components: 'src/components/atoms/*.js',
  defaultExample: true,
  showUsage: true,
  getComponentPathLine: componentPath => {
    const name = basename(componentPath, '.js')
    return `import ${capitalize(name)} from 'cosmos/${name}'`
  }
}
