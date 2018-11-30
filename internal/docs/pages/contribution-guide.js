import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Text,
  Link,
  List,
  ListItem
} from '../docs-components/typography'
import CodeBlock from '../docs-components/code-block'
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
              <Text>This is where all the component code sits.</Text>
              <Text>
                We create a <Code>Element</Code> with <Code>styled-components</Code> and use that in
                the React component. This is also exported so that compound components can style
                them if needed.
              </Text>
              <Text>
                <Code>propTypes</Code> and <Code>defaultProps</Code> help us validate props and
                build the documentation.
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
              <Text>
                Documentation is pulled from markdown files, there are a few different sections in
                the document:
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

          <Heading2>Automation attributes</Heading2>
          <Text>
            In order for Auth0 teams to write end-to-end tests with ease using tools like
            Webdriver.io or Chrome Puppeteer, please add automation attributes describing your
            component's name in <Code>snake-case</Code>.
          </Text>
          <Text>Here's an example of that implementation:</Text>
          <CodeBlock language="javascript">
            {`
// ...
import Automation from '../../_helpers/automation-attribute'

// ...

const MyComponent = <MyComponent.Element
  {...Automation('my-component')} // Here goes the automation attribute
  {...props} text={children}
/>
`}
          </CodeBlock>

          <Heading2>Testing components</Heading2>
          <Text>
            In order to ensure the reliability and mantainability of the component, please write
            snapshot and unit tests. Each component should have a test file located in
            <Code>internal/test/unit/component.test.js</Code> containing all test cases you
            consider.
          </Text>
          <Text>
            Additionally, add a test case in{' '}
            <Code>internal/test/unit/automation-attributes.test.js</Code> checking your component's
            automation attribute is present. Here is an example:
            <CodeBlock language="javascript">
              {`
it('Button', () => {
  const button = shallow(<Button />)

  expect(button.prop('data-cosmos-key')).toEqual('button')
})`}
            </CodeBlock>
          </Text>

          <Heading3>What do I test?</Heading3>
          <Text>
            Please test the most possible out of our component including: prop-based rendering
            branches, handler/callback props being called accordingly, user-action based rendering
            branches (i.e. component visually changing based on user actions within the component),
            among others.
          </Text>

          <Heading3>Rendering tests</Heading3>
          <Text>
            Please, do not write functional tests in order to test rendering features. Use{' '}
            <Link href="https://jestjs.io/docs/en/snapshot-testing">snapshot testing</Link> instead.
            Take a look at the <Code>Table</Code> component tests located in{' '}
            <Code>internal/test/unit/table.test.js</Code> as an example of a component that include
            both functional and snapshot rendering tests.
          </Text>

          <Heading3>Test ownership</Heading3>
          <Text>
            Ideally, each test should be written/fixed by the same person implemented the
            component/fix/feature in Cosmos.
          </Text>

          <Heading2 id="line-height-strategy">Line height strategy</Heading2>
          <Text>
            The <Code>line-height</Code> used in{' '}
            <Link href="https://styleguide.auth0.com">styleguide</Link> and cosmos are different.
            Styleguide uses <Code>2</Code> whereas cosmos uses <Code>1.6</Code> for it's elements.
          </Text>
          <Text>
            To make sure cosmos does not override local components of the application, we need to
            scope these to cosmos components.
          </Text>
          <Text>
            It's important to note that all elements should not have a line height of{' '}
            <Code>1.6</Code>. elements inside a container/wrapper element should inherit their
            parent's line height.
          </Text>
          <Text>Example:</Text>
          <CodeBlock language="html">
            {`
<p>
  <span>this is a child element</span>
  <span>that should inherit the paragraph's line height</span>
</p>
            `}
          </CodeBlock>
          <Text>
            You can import `containerStyles` into container/wrapper components
            <CodeBlock language="javascript">
              {`
import containerStyles from '@auth0/cosmos/_helpers/container-styles'
const Paragraph = styled.p\`
  \${containerStyles};
  color: \${colors.text};
\`
              `}
            </CodeBlock>
          </Text>
        </Container>
      </div>
    )
  }
}

export default ContributionGuide
