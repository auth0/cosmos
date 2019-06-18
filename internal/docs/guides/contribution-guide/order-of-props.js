import React from 'react'

import {
  FoldingSection,
  CodeBlock,
  Code,
  Heading3,
  Heading4,
  Text,
  Link,
  List
} from '../../docs-components'

const OrderOfProps = () => (
  <FoldingSection page="contribution-guide" name="Order of props">
    <List>
      <List.Item>
        <Heading3>
          Components should respect the props passed to them and set them on the underlying element
        </Heading3>
        <CodeBlock language="jsx">
          {`
const Link = (props) => (
  <a {...props}>clicky</a>
)

render(<Link id="custom-id">)
        `}
        </CodeBlock>
        renders
        <CodeBlock language="html">{`<a id="custom-id">`}</CodeBlock>
      </List.Item>

      <List.Item>
        <Heading3>Props should override local attributes.</Heading3>
        <Text>This will make sure the parent gets preference over what is rendered. </Text>
        <Text>
          Example: When you add an automation attribute in <Code>Breadcrumb.Link</Code>, you are
          overriding the automation attribute of the underlying Link
        </Text>
        <CodeBlock language="jsx">
          {`
const Breadcrumb.Link = (props) => (
  <Link {...Automation('breadcrumb.link')}>{props.children}</Link>
)

const Link = (props) => (
  <a {...Automation('link')} {...props}>clicky</a>
)
        `}
        </CodeBlock>
        renders
        <CodeBlock language="html">{`<a data-cosmos-key="breadcrumb.link"/>`}</CodeBlock>
        <Text>
          This principle extends to cosmos users as well. They can give their own attributes to
          cosmos components.
        </Text>
        <CodeBlock language="jsx">
          {`
<Link rel="nofollow" />

// or even
<Link data-cosmos-key="custom-component.link" />
        `}
        </CodeBlock>
        <Text>
          {' '}
          This is usually the behaviour you want from any atomic component, so it's useful to make
          this into a rule.
        </Text>
        <Heading4>
          <Code>...props</Code>
          should be the last thing inside a <Code>Component.Element</Code>
        </Heading4>
      </List.Item>
      <List.Item>
        <Heading3>When needed, cosmos can override the user's intent</Heading3>
        <Text>
          This is a tricky one, since you usually want the user to be able to have the final say.
        </Text>
        <Text>
          But, in some cases, you can override them to save them from making a mistake (usually a
          design mistake)
        </Text>
        <Text>
          Example:
          <CodeBlock language="jsx">{`
const InputAction = (props) => (
  <Button {...props} appearance="link" />
)
          `}</CodeBlock>
        </Text>
        <Text>
          Here we are locking <Code>appearance</Code> to <Code>link</Code> even if the user passed{' '}
          <Code>appearance="destructive"</Code>
        </Text>
      </List.Item>
    </List>
  </FoldingSection>
)

export default OrderOfProps
