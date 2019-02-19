import React from 'react'

import { Heading1, Heading2, Text, Link, Subheader } from './docs-components/typography'
import CodeBlock from './docs-components/code-block'
import Tag from './docs-components/tag'

class Overriding extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />
        <Heading1>Getting Started</Heading1>
        <Subheader>Cosmos is a Design System to build Auth0 products.</Subheader>

        <Heading2>Installation</Heading2>
      </div>
    )
  }
}

export default Overriding
