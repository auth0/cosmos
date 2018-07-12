import React from 'react'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Link, Text } from './docs-components/typography'
import Pre from './docs-components/pre'
import { Code } from '@auth0/cosmos'

class Usage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="How to use Cosmos?" />
        <Heading1>How to use Cosmos?</Heading1>

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
      </div>
    )
  }
}

export default Usage
