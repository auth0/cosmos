/* Load examples from markdown files */

const webpackMarkdownLoader = require.context(
  '!raw-loader!./../../components/atoms',
  false,
  /\.md$/
)

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const examples = webpackMarkdownLoader.keys().map(filename => {
  let name = capitalize(filename.replace('./', '').replace('.md', ''))
  return {
    name,
    content: webpackMarkdownLoader(filename)
  }
})

export default examples
