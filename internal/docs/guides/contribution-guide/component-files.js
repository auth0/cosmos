import React from 'react'

import { Text, List, CodeBlock, FoldingSection, Code } from '../../docs-components'

const ComponentFiles = () => (
  <FoldingSection page="contribution-guide" name="Component files">
    <Text>
      Here are the things that make a component <strong>good</strong>:
    </Text>
    <Text>Each component directory has these 5 files:</Text>
    <List>
      <List.Item>
        <Code>&lt;component_name&gt;.tsx</Code>
        <Text>This is where all the component code sits.</Text>
        <Text>
          We create an <Code>Element</Code> with <Code>styled-components</Code> and use that in the
          React component. This is also exported so that compound components can style them if
          needed.
        </Text>
        <Text>
          <Code>IComponentProps</Code> (TypeScript interface containing all your props) and{' '}
          <Code>defaultProps</Code> help us validate props and build the documentation.
        </Text>
        <CodeBlock language="typescript">
          {`
import * as React from 'react'
import styled from 'styled-components'


export interface IAvatarProps {
  /** What prop1 does */
  prop1: string
  /** What prop2 does */
  prop2: number
}

const Avatar = (props: IAvatarProps) => (
  <Avatar.Element size={props.size}>
    <img src={props.image}></img>
  </Avatar.Element>
)

Avatar.Element = styled.div\`
  border-radius: 50%;
\`

Avatar.defaultProps = {
  prop2: 50
}

export default Avatar
export { AvatarElement }
        `}
        </CodeBlock>
      </List.Item>
      <List.Item>
        <Code>index.ts</Code>
        <Text>This file exports the component for easy imports</Text>
        <CodeBlock language="typescript">
          {`
export * from './avatar'
        `}
        </CodeBlock>
      </List.Item>

      <List.Item>
        <Code>&lt;component_name&gt;.md</Code>
        <Text>
          Documentation is pulled from these markdown files. There are a few different sections in the
          document:
        </Text>
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
      </List.Item>
      <List.Item>
        <Code>&lt;component_name&gt;.story.tsx</Code>
        <Text>Story for visual tests; these are compared for every pull request</Text>

        <CodeBlock language="javascript">
          {`
import * React from 'react'
import { storiesOf } from '@storybook/react'
import { Avatar } from './'

storiesOf('Avatar').add('with images', () => (
  <div>
    <Avatar size="small" image="https://cdn.auth0.com/logo.svg" />
    <Avatar size="medium" image="https://cdn.auth0.com/logo.svg" />
  </div>
))
        `}
        </CodeBlock>
      </List.Item>
      <List.Item>
        <Text>+ you can add as many files as you need</Text>
      </List.Item>
    </List>
  </FoldingSection>
)

export default ComponentFiles
