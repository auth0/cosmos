import fs from 'fs'
import path from 'path'

const transformer = (file, api) => {
  const j = api.jscodeshift

  if (file.path.includes('index.js')) {
    let defaultDeclaration
    let namedDeclarations = []

    const source = j(file.source)

    /* default declaration */
    const defaults = source.find(j.ExportDefaultDeclaration)
    defaults.forEach(path => {
      defaultDeclaration = path.value.declaration.name
    })

    /* named declarations */
    const statements = []
    source.find(j.ExportNamedDeclaration).forEach(path => statements.push(path.value.specifiers))
    statements.forEach(statement =>
      statement.forEach(specifier => namedDeclarations.push(specifier.local.name))
    )

    /* rename index.js to component-name.js */
    const directory = path.dirname(file.path)
    const component = directory.split('/').pop()

    fs.renameSync(file.path, file.path.replace('index', component))

    /* write new file */
    let code = `import `
    if (defaultDeclaration) code += `${defaultDeclaration}`

    if (namedDeclarations.length) {
      if (defaultDeclaration) code += ', '
      code += `{ ${namedDeclarations.join()} }`
    }
    code += ` from './${component}'`

    code += `\n\n`

    if (defaultDeclaration) code += `export default ${defaultDeclaration}`
    if (namedDeclarations.length) {
      code += `\n`
      code += `export { ${namedDeclarations.join()} }`
    }

    return code
  }

  return j(file.source).toSource()
}

export default transformer
