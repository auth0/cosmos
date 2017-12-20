import React from 'react'
import Markdown from 'markdown-to-jsx'

import Playground from './playground'

const options = {
  overrides: {
    code: { component: Playground }
  }
}

const Example = props => {
  return (
    <div>
      <Markdown>{props.docs.content}</Markdown>
    </div>
  )
}

export default Example
