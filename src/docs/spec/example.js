import React from 'react'
import Markdown from 'markdown-to-jsx'

import Playground from './playground'
import Break from './break'
import TextBlock from './text-block'
import SectionHeader from './section-header'
import ExampleHeader from './example-header'
import { Heading5, Code } from '../../components'

const Example = props => {
  const options = {
    overrides: {
      hr: { component: Break },
      h2: { component: SectionHeader },
      h4: { component: ExampleHeader },
      h5: { component: TextBlock },
      p: { component: TextBlock },
      li: { component: Heading5 },
      code: {
        /* use playground for js code blocks */
        component: markDownprops => {
          if (!markDownprops.className) return <Code>{markDownprops.children}</Code>
          else if (!markDownprops.className.includes('js')) return null
          else
            return (
              <Playground
                code={markDownprops.children}
                tags={markDownprops.className}
                component={props.component}
              />
            )
        }
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
