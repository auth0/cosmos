import { configure } from '@storybook/react'
import { getStorybook } from '@storybook/react'
import 'react-chromatic/storybook-addon'

/* This line loads all the .story files from the components directory */
let req = require.context('../core/components/', true, /story\.js$/)
if (process.env.SKETCH) req = require.context('../core/components/', true, /sketch\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
export { getStorybook }
