import React from 'react'
import Markdown from 'markdown-to-jsx'

import Playground from './playground'
import Break from './break'
import SectionHeader from './section-header'
import { Text, Heading3, Heading5 } from '../../components'

const options = {
  overrides: {
    hr: { component: Break },
    h2: { component: SectionHeader },
    h3: { component: Heading3 },
    h4: { component: Heading5 },
    p: { component: Text },
    code: {
      /* use playground for js code blocks */
      component: props => (props.className === 'lang-js' ? <Playground {...props} /> : null)
    }
  }
}

const Example = props => {
  return (
    <div>
      <Markdown options={options}>{props.docs.content}</Markdown>
    </div>
  )
}

export default Example
