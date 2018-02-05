import React from 'react'
import Markdown from 'markdown-to-jsx'

import Playground from './playground'
import Break from './break'

import IconBrowser from './icon-browser'
import { Code } from '../../components'
import { Text, ListItem, List, Link } from '../docs-components/typography'
import SectionHeader from './section-header'
import ExampleHeader from './example-header'

const Example = props => {
  const options = {
    overrides: {
      hr: Break,
      h2: SectionHeader,
      h3: ExampleHeader,
      p: Text,
      a: Link,
      li: ListItem,
      ul: List,
      /* use playground for js code blocks */
      code: markdownProps => {
        const language = markdownProps.className

        if (!language) return <Code>{markdownProps.children}</Code>
        else if (!['lang-js', 'lang-jsx'].includes(language)) return null
        else {
          return (
            <div>
              <Playground
                code={markdownProps.children}
                language={language}
                component={props.component}
              />
            </div>
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
