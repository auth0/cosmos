import React from 'react'
import Markdown from 'markdown-to-jsx'

import Playground from './playground'
import Break from './break'
import SectionHeader from './section-header'
import ExampleHeader from './example-header'
import { Text, Heading3, Heading5 } from '../../components'

const Example = props => {
  const options = {
    overrides: {
      hr: { component: Break },
      h2: { component: SectionHeader },
      h4: { component: ExampleHeader },
      p: { component: Heading5 },
      li: { component: Heading5 },
      code: {
        /* use playground for js code blocks */
        component: markDownprops =>
          markDownprops.className.includes('js') ? (
            <Playground
              code={markDownprops.children}
              tags={markDownprops.className}
              component={props.component}
            />
          ) : null
      }
    }
  }

  return (
    <div style={{ maxWidth: 800 }}>
      <Markdown options={options}>{props.docs.content}</Markdown>
    </div>
  )
}

export default Example
