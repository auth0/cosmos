/* Load examples from markdown files */

const webpackMarkdownLoader = require.context('!raw-loader!./../components', true, /\.md$/)

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const examples = webpackMarkdownLoader.keys().map(filename => {
  let name = capitalize(
    filename
      .split('/')
      .pop() // take only the filename from path (/atoms/button.md)
      .replace('.md', '') // remove the extension
      .replace('_', '') // remove hint for helper components
  )
  return {
    name,
    content: webpackMarkdownLoader(filename)
  }
})

export default examples
