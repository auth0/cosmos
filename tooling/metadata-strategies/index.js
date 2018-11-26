const JavaScriptResolverStrategy = require('./javascript')
const TypeScriptResolverStrategy = require('./typescript')

module.exports = function resolveCompoenentMetadata(path) {
  const fileExtension = path.split('.')[1]
  const strategies = {
    js: JavaScriptResolverStrategy,
    jsx: JavaScriptResolverStrategy,
    ts: TypeScriptResolverStrategy,
    tsx: TypeScriptResolverStrategy
  }
  const Strategy = strategies[fileExtension]

  const strategy = new Strategy(path)
  return strategy.getMetadata()
}
