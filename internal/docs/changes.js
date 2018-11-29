import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Markdown from 'markdown-to-jsx'
import { changelog } from '@auth0/cosmos/meta/changelog'

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

function convertPRToLink(match, p1) {
  return `<a href="https://github.com/auth0/cosmos/pull/${p1}" target="_blank">${match}</a>`
}

function convertHandleToLink(match) {
  const githubUsername = match.substr(1)
  return `<a href="https://github.com/${githubUsername}" target="_blank">${match}</a>\xa0`
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
let content = changelog.replace(/\[#(\d+)\]/g, convertPRToLink)

content = content.replace(/(\B\@\w+\s)/g, convertHandleToLink)

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
