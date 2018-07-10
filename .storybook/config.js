import { configure } from '@storybook/react'
import { getStorybook } from '@storybook/react'
import 'react-chromatic/storybook-addon'

let req = require.context('../core/components/', true, /story\.js$/)
if (process.env.SKETCH) req = require.context('../core/components/', true, /sketch\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
export { getStorybook }
