import React from 'react'
import { Heading3, Text, List } from '../../docs-components'
import FoldingSection from '../../docs-components/folding-section'
import { Code, Alert } from '@auth0/cosmos'

const LinkingCosmos = () => (
  <FoldingSection page="contribution-guide" name="Locally Linking Cosmos">
    <Heading3>How to link cosmos to my application?</Heading3>
    <List>
      <List.Item>
        <Text>
          Build Cosmos in distribution mode by running <Code>yarn build-packages</Code>. This
          will compile cosmos to <Code>dist/components/</Code>.
        </Text>
      </List.Item>

      <List.Item>
        <Text>
          Go into <Code>dist/components/</Code> and run <Code>yarn link</Code>.
        </Text>
      </List.Item>

      <List.Item>
        <Text>
          Go to your project's folder and run <Code>yarn link @auth0/cosmos</Code>.
        </Text>
      </List.Item>

      <List.Item>
        <Text>That's it, you should see your new guide in the sidebar.</Text>
      </List.Item>
    </List>
    <Heading3>How to remove the link?</Heading3>
    <List>
      <List.Item>
        <Text>
          Go to your application's folder and run <Code>yarn unlink @auth0/cosmos</Code>.
        </Text>
      </List.Item>
      <List.Item>
        <Text>
          Run <Code>yarn install</Code> or equivalent to restore the remote copy of cosmos you
          specified in <Code>package.json</Code>.
        </Text>
      </List.Item>
    </List>
    <Alert type="information">
      You'll need to run <Code>yarn build-packages</Code> everytime you change something on the
      Cosmos side for the changes to be applied in your application.
    </Alert>
  </FoldingSection>
)

export default LinkingCosmos
