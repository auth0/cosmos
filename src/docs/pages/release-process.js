import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Text, Link, List, ListItem } from '../docs-components/typography'
import Pre from '../docs-components/pre'
import { Code } from 'auth0-cosmos'

class ContributionGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />

        <Heading1>Release process</Heading1>
        <Text>
          <Code>cosmos</Code> follows <Link href="https://semver.org/">semantic versioning.</Link>
        </Text>
        <Text>Some context first. Cosmos consists of 3 packages:</Text>
        <List>
          <ListItem>
            <Link href="https://github.com/auth0/cosmos/tree/master/src/tokens">
              auth0-cosmos-tokens
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/auth0/cosmos/tree/master/src/babel-preset">
              babel-preset-cosmos
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://github.com/auth0/cosmos/tree/master/src/components">
              auth-cosmos
            </Link>
          </ListItem>
        </List>
        <Text>
          The last package depends on the first two. To decrease the amount of coordination needed,
          we keep the same version number in all the packages. This version is kept in the{' '}
          <Link href="https://github.com/auth0/cosmos/blob/master/package.json#L3">
            <Code>package.json</Code> at the root of the directory.
          </Link>
        </Text>
        <Heading2>Instructions</Heading2>
        <Text>
          1. To publish a new version of cosmos libraries, update the version number for the{' '}
          <Link href="https://github.com/auth0/cosmos/blob/master/package.json#L3">
            root <Code>package.json</Code>
          </Link>
          <br />
        </Text>
        <Text>
          2. Next, run this command in your terminal or the dedicated CD environment:
          <Pre>yarn run publish</Pre>
        </Text>
        <Text>This should publish new versions for all Cosmos packages.</Text>
      </div>
    )
  }
}

export default ContributionGuide
