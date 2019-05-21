import React from 'react'

import { Heading3, Text, Link, List, CodeBlock, FoldingSection, Code } from '../../docs-components'

const Testing = () => (
  <FoldingSection page="contribution-guide" name="Testing">
    <Text>
      In order to ensure the reliability and mantainability of the component, please write snapshot
      and unit tests. Each component should have a test file located in
      <Code>internal/test/unit/component.test.js</Code> containing all test cases you consider.
    </Text>
    <Text>
      Additionally, add a test case in <Code>internal/test/unit/automation-attributes.test.js</Code>{' '}
      checking your component's automation attribute is present. Here is an example:
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
      Please test the most possible out of our component including: prop-based rendering branches,
      handler/callback props being called accordingly, user-action based rendering branches (i.e.
      component visually changing based on user actions within the component), among others.
    </Text>

    <Heading3>Rendering tests</Heading3>
    <Text>
      Please, do not write functional tests in order to test rendering features. Use{' '}
      <Link href="https://jestjs.io/docs/en/snapshot-testing">snapshot testing</Link> instead. Take
      a look at the <Code>Table</Code> component tests located in{' '}
      <Code>internal/test/unit/table.test.js</Code> as an example of a component that include both
      functional and snapshot rendering tests.
    </Text>

    <Heading3>Test ownership</Heading3>
    <Text>
      Ideally, each test should be written/fixed by the same person implemented the
      component/fix/feature in Cosmos.
    </Text>

    <Heading3>Automation attributes</Heading3>
    <Text>
      In order for Auth0 teams to write end-to-end tests with ease using tools like Webdriver.io or
      Chrome Puppeteer, please add automation attributes describing your component's name in{' '}
      <Code>snake-case</Code>.
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
  </FoldingSection>
)

export default Testing
