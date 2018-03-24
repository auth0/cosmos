import { configure } from '@storybook/react'
import 'react-chromatic/storybook-addon'

/* load all stories from components */

const req = require.context('../components/', true, /story\.js$/)

function loadStories() {
  req.keys().forEach(req)
}

configure(loadStories, module)
