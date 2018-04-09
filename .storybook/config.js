import { configure } from '@storybook/react'
import { getStorybook } from '@storybook/react'

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
export { getStorybook }
