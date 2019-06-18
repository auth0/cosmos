import React from 'react'

import { Text, Code, List, CodeBlock, FoldingSection } from '../../docs-components'

const AuthoringGuides = () => (
  <FoldingSection page="contribution-guide" name="Authoring Guides">
    <List>
      <List.Item>
        <Text>
          Create a new file under <Code>docs/pages/</Code>. Example:{' '}
          <Code>docs/pages/new-guide.js</Code>
        </Text>
      </List.Item>

      <List.Item>
        <Text>
          Export a React component from this file. You can import `docs-components` and cosmos
          components to make authoring easier.
        </Text>
      </List.Item>

      <List.Item>
        <Text>
          Import this component and add it to <Code>docs/guides.js</Code>
        </Text>
        <CodeBlock language="javascript">{`
import GuidingPrinciples from './pages/guiding-principles'
import NewGuide from './pages/new-guide'

/* this is the order in which they are displayed in the sidebar */
const guides = [
  { path: '/guiding-principles', title: 'Guiding Principles', component: GuidingPrinciples },
  { path: '/new-guide', title: 'New Guide', component: NewGuide }
]
    `}</CodeBlock>
      </List.Item>

      <List.Item>
        <Text>That's it, you should see your new guide in the sidebar.</Text>
      </List.Item>
    </List>
  </FoldingSection>
)

export default AuthoringGuides
