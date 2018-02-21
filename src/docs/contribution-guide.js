import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Text, Link, List, ListItem } from './docs-components/typography'
import Pre from './docs-components/pre'
import { Code } from '../components'

const Container = styled.div``

class ContributionGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Heading1>Contributing to cosmos</Heading1>
          <Heading2>Setup</Heading2>
          <Text>
            Clone the GitHub repository on your machine
            <Pre>git clone https://github.com/auth0/cosmos.git</Pre>
            To install all the dependencies, run
            <Pre>npm install</Pre>
            Create a new branch and start the development server
            <Pre>npm run dev</Pre>
          </Text>
          <Heading2>Architecture</Heading2>
          <Text>
            We use{' '}
            <Link href="https://github.com/facebookincubator/create-react-app">
              <Code>create-react-app</Code>
            </Link>{' '}
            to work on cosmos.
          </Text>
          <Text>
            There are 4 big parts of cosmos:
            <List>
              <ListItem>Tokens: configs that can be shared imported into projects</ListItem>
              <ListItem>Components: React component library</ListItem>
              <ListItem>Overview: Bird's eye view of components</ListItem>
              <ListItem>Docs: Generated documentation site</ListItem>
            </List>
          </Text>
          Each component requires 2 files:
          <List>
            <ListItem>
              <Code>component/index.js</Code> where the code sits
            </ListItem>
            <ListItem>
              <Code>component/component.md</Code> to add documentation
            </ListItem>
          </List>
        </Container>
      </div>
    )
  }
}

export default ContributionGuide
