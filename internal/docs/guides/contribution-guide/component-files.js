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
        <Code>component.js</Code>
        <Text>This is where all the component code sits.</Text>
        <Text>
          We create a <Code>Element</Code> with <Code>styled-components</Code> and use that in the
          React component. This is also exported so that compound components can style them if
          needed.
        </Text>
        <Text>
          <Code>propTypes</Code> and <Code>defaultProps</Code> help us validate props and build the
          documentation.
        </Text>
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

Avatar.propTypes = {}
Avatar.defaultProps = {}

export default Avatar
export { AvatarElement }
        `}
        </CodeBlock>
      </List.Item>
      <List.Item>
        <Code>index.js</Code>
        <Text>This file exports the component for easy imports</Text>
        <CodeBlock language="javascript">
          {`
import Avatar from './avatar'

export default Avatar
        `}
        </CodeBlock>
      </List.Item>

      <List.Item>
        <Code>component.md</Code>
        <Text>
          Documentation is pulled from markdown files, there are a few different sections in the
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
      </List.Item>
      <List.Item>
        <Text>+ you can add as many files as you need</Text>
      </List.Item>
    </List>
  </FoldingSection>
)

export default ComponentFiles
