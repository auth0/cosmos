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

import Setup from './contribution-guide/setup'
import SystemGuidelines from './contribution-guide/system-guidelines'
import Architecture from './contribution-guide/architecture'
import ComponentFiles from './contribution-guide/component-files'
import Testing from './contribution-guide/testing'
import LineHeight from './contribution-guide/line-height'

const Container = styled.div``

class ContributionGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Container>
          <Heading1>Contributing to Cosmos</Heading1>

          <Setup />
          <SystemGuidelines />
          <Architecture />
          <ComponentFiles />
          <Testing />
          <LineHeight />
        </Container>
      </div>
    )
  }
}

export default ContributionGuide
