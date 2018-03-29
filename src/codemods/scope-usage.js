const transformer = (file, api) => {
  const j = api.jscodeshift

  return j(file.source)
    .find(j.ImportDeclaration)
    .forEach(path => {
      path.value.source.value = path.value.source.value.replace('auth0-cosmos, @auth0/cosmos')
    })
    .toSource()
}

export default transformer
