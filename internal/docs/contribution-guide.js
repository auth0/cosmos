import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import {
  Heading1,
  Heading2,
  Heading4,
  Text,
  Link,
  List,
  ListItem
} from './docs-components/typography'
import CodeBlock from './docs-components/code-block'
import { Code } from '@auth0/cosmos'

const Container = styled.div``

class ContributionGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Heading1>Contributing to Cosmos</Heading1>
          <Heading2>Setup</Heading2>
          <Text>
            Clone the GitHub repository on your machine
            <CodeBlock language="shell">$ git clone https://github.com/auth0/cosmos.git</CodeBlock>
            To install all the dependencies, run
            <CodeBlock language="shell">$ yarn</CodeBlock>
            To search for the script you need, run
            <CodeBlock language="shell">$ yarn i</CodeBlock>
          </Text>
          <Heading2>Architecture</Heading2>
          <Text>The repository is broken into 3 parts:</Text>
          <List>
            <ListItem>
              <Code>src</Code> or <Code>core</Code>: This contains packages that are published
              <List nested>
                <ListItem>
                  <Code>tokens</Code>: configs that can be shared imported into projects
                </ListItem>
                <ListItem>
                  <Code>components</Code>: React component library
                </ListItem>
                <ListItem>
                  <Code>babel-preset</Code>: Optional Babel preset to use cosmos
                </ListItem>

                <Text>
                  <Code>src</Code> also contains 3 other directories that are not published
                </Text>
                <ListItem>
                  <Code>codemods</Code>: Codemods for cosmos (not published)
                </ListItem>
                <ListItem>
                  <Code>icons</Code>: Birds eye view of components
                </ListItem>
                <ListItem>
                  <Code>overview</Code>: Birds eye view of components
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Code>internal</Code>:
              <List nested>
                <ListItem>
                  <Code>docs</Code>: Generated documentation site
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <Code>examples</Code>: Examples of using cosmos
            </ListItem>
          </List>

          <Heading2>Component files</Heading2>
          <Text>
            Here are the things that make a component <strong>good</strong>:
          </Text>
          <Text>Each component directory has these 5 files:</Text>
          <List>
            <ListItem>
              <Code>component.js</Code>
              <Text>This is where all the component code sits</Text>
              <CodeBlock language="javascript">
                {`
import React from 'react'
import styled from 'styled-components'

const AvatarElement = styled.div\`
  border-radius: 50%;
\`

const Avatar = props => (
  <AvatarElement size={props.size}>
    <img src={props.image}></img>
  </AvatarElement>
)

export default Avatar
export { AvatarElement }
                `}
              </CodeBlock>
            </ListItem>
            <ListItem>
              <Code>index.js</Code>
              <Text>This file exports the component for easy imports</Text>
              <CodeBlock language="javascript">
                {`
import Avatar from './avatar'

export default Avatar
                `}
              </CodeBlock>
            </ListItem>

            <ListItem>
              <Code>component.md</Code>
              <Text>This is where the documentation and examples for the component sits</Text>
              <CodeBlock language="markdown">
                {`
# Metadata:

\`\`\`meta
  category: Actions
  description: Displays an image representing a user or resource
  unstable: true
\`\`\`

# Props table:

\`\`\`jsx
  <Avatar {props} defaults={{size: 'medium'}} />
\`\`\`

# Description:

You can use an \`Avatar\` to display an image that represents a user or a resource.

# Examples:

With use case

\`\`\`js
  <Avatar type="user" image="https://cdn.auth0.com/logo.svg" />
\`\`\`

                `}
              </CodeBlock>
            </ListItem>
            <ListItem>
              <Code>component.story.js</Code>
              <Text>Story for visual tests, these are compared for every pull request</Text>

              <CodeBlock language="javascript">
                {`
import React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from '@auth0/cosmos'

storiesOf('Avatar').add('with images', () => (
  <div>
    <Avatar size="small" image="https://cdn.auth0.com/logo.svg" />
    <Avatar size="medium" image="https://cdn.auth0.com/logo.svg" />
  </div>
))
                `}
              </CodeBlock>
            </ListItem>
            <ListItem>
              <Code>component.sketch.js</Code>
              <Text>Story that are converted into sketch symbols</Text>
              <CodeBlock language="javascript">
                {`
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Avatar } from '@auth0/cosmos'

storiesOf('Avatar', module).add('small', () => (
  <Avatar size="small" image="https://cdn.auth0.com/logo.svg" />
))
                `}
              </CodeBlock>
            </ListItem>
            <ListItem>
              <Text>+ you can add as many files as you need</Text>
            </ListItem>
          </List>
        </Container>
      </div>
    )
  }
}

export default ContributionGuide
