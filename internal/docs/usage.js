import React from 'react'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Link, Text } from './docs-components/typography'
import Pre from './docs-components/pre'
import { Code } from '@auth0/cosmos'
import CodeBlock from './docs-components/code-block'

class Usage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="How to use Cosmos?" />
        <Heading1>How to use Cosmos?</Heading1>

        <Heading2>Installation</Heading2>
        <Text>
          To add <Code>cosmos</Code> to your react application, run
          <CodeBlock language="shell">$ yarn add @auth0/cosmos</CodeBlock>
          If you prefer npm, run this command instead:
          <CodeBlock language="shell">$ npm install --save @auth0/cosmos</CodeBlock>
          That is all you need to do, you are now ready to use it in your app, no build step needed.
          <br />
          (This is the temporary package name, it will soon move to the <Code>auth0/cosmos</Code>)
        </Text>

        <Heading2>Components</Heading2>
        <Text>
          Import components that you want from the library
          <Pre code="import { Button } from '@auth0/cosmos'" />
          and use them along with you React components:
          <Pre
            code={`
  const Actions = () => (
    <div>
      <Button appearance="primary" onClick={this.save}>Save changes</Button>
      <Button onClick={this.clear}>Clear</Button>
    </div>
  )
            `}
          />
        </Text>

        <Text>
          To learn more about the components and the <Code>props</Code> they offer, pick a component
          from the sidebar on the left.
        </Text>
        <Text>
          You can also look at example code from our Manage Clients{' '}
          <Link href="https://github.com/auth0/cosmos/tree/master/src/manage">
            proof of concept repo.
          </Link>
        </Text>

        <Heading2>Building your own components</Heading2>
        <Text>
          Cosmos uses{' '}
          <Link target="_blank" href="https://www.styled-components.com">
            styled-components
          </Link>{' '}
          under the hood. We recommend using it to create presentational components.
        </Text>
        <Text>
          You can import it from cosmos to make sure you use the same version:
          <Pre code="import styled from '@auth0/cosmos/styled'" />
          and use them to create new components:
          <Pre
            code={`
  import styled from '@auth0/cosmos/styled'

  const Wrapper = styled.div\`
    background-color: grey;
  \`

  const Actions = () => (
    <Wrapper>
      <Button appearance="primary" onClick={this.save}>Save changes</Button>
      <Button onClick={this.clear}>Clear</Button>
    </Wrapper>
  )
            `}
          />
          <Code>styled-components</Code> has very good{' '}
          <Link target="_blank" href="https://www.styled-components.com">
            documentation
          </Link>{' '}
          where you can learn how to use it.
        </Text>

        <Heading2>Disable global resets</Heading2>
        <Text>
          Cosmos adds a set of resets the same resets to your application, if you already have some
          resets in place, you can disable the resets from Cosmos by setting an environment variable
          with webpack
          <CodeBlock language="javascript">
            {`
{
   plugins: [
      new webpack.EnvironmentPlugin({
         COSMOS_DISABLE_RESETS: true
      })
   ]
}
`}
          </CodeBlock>
        </Text>
      </div>
    )
  }
}

export default Usage
