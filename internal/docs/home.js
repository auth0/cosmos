import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Text, Link, Subheader } from './docs-components/typography'
import CodeBlock from './docs-components/code-block'
import Tag from './docs-components/tag'

import { Code, Icon, List, Badge } from '@auth0/cosmos'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Heading1>Getting Started</Heading1>
        <Subheader>Cosmos is a Design System to build Auth0 products.</Subheader>

        <Heading2>Installation</Heading2>
        <Text>
          To add <Code>cosmos</Code> to your react application, run
          <CodeBlock language="shell">$ yarn add @auth0/cosmos</CodeBlock>
          If you prefer npm, run this command instead:
          <CodeBlock language="shell">$ npm install --save @auth0/cosmos</CodeBlock>
          That is all you need to do, you are now ready to use it in your app, no build step needed.
          <br />
          <br />
          Continue to the <Link href="#/usage">usage section</Link> to read more.
        </Text>

        <Heading2>Examples</Heading2>
        <Text>
          <div>We have created some applications with cosmos:</div>
          <br />
          <Link href="/?url=manage/#/clients">PoC of manage</Link>
          <br />
          <br />
          <Link href="#/overview">Overview of components</Link>
          <br />
          <br />
          <Link href="https://github.com/auth0/cosmos/tree/master/examples/webpack-hello-world">
            Hello world
          </Link>
        </Text>

        <Heading2>Feedback</Heading2>
        <Text>
          Issues or feature requests can be created on
          <Link href="https://github.com/auth0/cosmos/issues"> our GitHub page</Link> or{' '}
          <Link href="https://auth0.slack.com/messages/C5ZK0DD8X">on Slack</Link>.
          <br />
          <br />
          You can use the <Link href="#/playground">playground</Link> to test and share code, report
          bugs and ask for feedback.
        </Text>

        <Heading2>Useful links</Heading2>
        <Link href="/sandbox">Sandbox</Link>
        <br />
        <br />
        <Link href="#">Sketch UI Kit (coming soon)</Link>
      </div>
    )
  }
}

export default Home
