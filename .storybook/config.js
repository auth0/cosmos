import { configure } from '@storybook/react'
import { getStorybook } from '@storybook/react'
import 'storybook-chromatic'

/* This line loads all the .story files from the components */
const components = require.context('../core/components/', true, /story\.(js|tsx)$/)
const examples = require.context('../examples/', true, /story\.(js|tsx)$/)

function loadStories() {
  components.keys().forEach(components)
  examples.keys().forEach(examples)
}

configure(loadStories, module)
export { getStorybook }
