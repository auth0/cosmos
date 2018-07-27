import { configure } from '@storybook/react'
import { getStorybook } from '@storybook/react'
import 'react-chromatic/storybook-addon'

/* This line loads all the .story files from the components */
const components = require.context('../core/components/', true, /story\.js$/)
const sketchStories = require.context('../core/components/', true, /sketch\.js$/)
const examples = require.context('../examples/', true, /story\.js$/)

function loadStories() {
  if (process.env.SKETCH) sketchStories.keys().forEach(sketchStories)
  else {
    components.keys().forEach(components)
    examples.keys().forEach(examples)
  }
}

configure(loadStories, module)
export { getStorybook }
