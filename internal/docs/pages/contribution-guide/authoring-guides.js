import React from 'react'

import { Heading3, Text, Link, List, ListItem } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import FoldingSection from '../../docs-components/folding-section'
import { Code } from '@auth0/cosmos'

const AuthoringGuides = () => (
  <FoldingSection page="contribution-guide" name="Authoring Guides">
    <List>
      <ListItem>
        <Text>
          Create a new file under <Code>docs/pages/</Code>. Example:{' '}
          <Code>docs/pages/new-guide.js</Code>
        </Text>
      </ListItem>

      <ListItem>
        <Text>
          Export a React component from this file. You can import `docs-components` and cosmos
          components to make authoring easier.
        </Text>
      </ListItem>

      <ListItem>
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
      </ListItem>

      <ListItem>
        <Text>That's it, you should see your new guided in the sidebar.</Text>
      </ListItem>
    </List>
  </FoldingSection>
)

export default AuthoringGuides
