const transformer = (file, api) => {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.ImportDeclaration)
    .forEach(path => {
      path.value.source.value = path.value.source.value.replace(
        'styled-components',
        '@auth0/cosmos/styled'
      )
    })
    .toSource()
}

export default transformer
