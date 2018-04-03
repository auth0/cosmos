import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Markdown from 'markdown-to-jsx'
import { changelog } from './changelog'

import {
  Heading1,
  Heading2,
  Heading3,
  Text,
  Link,
  List,
  ListItem
} from './docs-components/typography'
import { Code } from '@auth0/cosmos'

const Container = styled.div``

const content = changelog.replace(
  /\[#(\d+)\]/g,
  '<a href="https://github.com/auth0/cosmos/pull/$1" target="_blank">[#$1]</a>'
)

const options = {
  overrides: {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    p: Text,
    a: Link,
    li: ListItem,
    ul: List,
    code: Code
  }
}

class Changes extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Markdown options={options}>{content}</Markdown>
        </Container>
      </div>
    )
  }
}

export default Changes
