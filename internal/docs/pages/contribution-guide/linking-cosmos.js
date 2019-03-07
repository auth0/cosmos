import React from 'react'

import { Heading3, Text, Link, List, ListItem } from '../../docs-components/typography'
import CodeBlock from '../../docs-components/code-block'
import FoldingSection from '../../docs-components/folding-section'
import { Code } from '@auth0/cosmos'

const LinkingCosmos = () => (
  <FoldingSection page="contribution-guide" name="Locally Linking Cosmos">
    <Heading3>How to link cosmos to my application?</Heading3>
    <List>
      <ListItem>
        <Text>
          Build Cosmos for in distribution mode by running <Code>yarn build-packages</Code>. This
          will compile cosmos to <Code>dist/components/</Code>.
        </Text>
      </ListItem>

      <ListItem>
        <Text>
          Got into <Code>dist/components/</Code> and run <Code>yarn link</Code>.
        </Text>
      </ListItem>

      <ListItem>
        <Text>
          Go to your project's folder and run <Code>yarn link @auth0/cosmos</Code>.
        </Text>
      </ListItem>

      <ListItem>
        <Text>That's it, you should see your new guided in the sidebar.</Text>
      </ListItem>
    </List>
    <Heading3>How to remove the link?</Heading3>
    <List>
      <ListItem>
        <Text>
          Go to your application's folder and run <Code>yarn unlink @auth0/cosmos</Code>.
        </Text>
      </ListItem>
      <ListItem>
        <Text>
          Run <Code>yarn install</Code> or equivalent to restore the remote copy of cosmos you
          specified in <Code>package.json</Code>.
        </Text>
      </ListItem>
    </List>
  </FoldingSection>
)

export default LinkingCosmos
