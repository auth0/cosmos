const transformer = (file, api) => {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.ImportDeclaration)
    .forEach(path => {
      if (path.value.source.value === 'auth0-cosmos') path.value.source.value = '@auth0/cosmos'
    })
    .toSource()
}

export default transformer
