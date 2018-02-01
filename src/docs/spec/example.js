import React from 'react'
import Markdown from 'markdown-to-jsx'

import Playground from './playground'
import Break from './break'
import TextBlock from './text-block'
import SectionHeader from './section-header'
import ExampleHeader from './example-header'
import IconBrowser from './icon-browser'
import { Heading5, Code } from '../../components'

const Example = props => {
  const options = {
    overrides: {
      hr: Break,
      h2: SectionHeader,
      h4: ExampleHeader,
      h5: TextBlock,
      p: TextBlock,
      li: Heading5,
      /* use playground for js code blocks */
      code: markdownProps => {
        if (!markdownProps.className) return <Code>{markdownProps.children}</Code>
        else if (markdownProps.className.indexOf('js') === -1) return null
        else {
          return (
            <Playground
              code={markdownProps.children}
              tags={markdownProps.className}
              component={props.component}
            />
          )
        }
      },
      IconBrowser
    }
  }

  return (
    <div style={{ maxWidth: 800 }}>
      <Markdown options={options}>{props.documentation}</Markdown>
    </div>
  )
}

export default Example
