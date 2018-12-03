import React from 'react'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Link, Text } from '../docs-components/typography'
import Pre from '../docs-components/pre'
import { Code } from '@auth0/cosmos'
import CodeBlock from '../docs-components/code-block'

import Installation from './usage/installation'
import UsingComponents from './usage/using-components'
import CustomComponents from './usage/custom-components'
import WithStyleguide from './usage/with-styleguide'

class Usage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="How to use Cosmos?" />
        <Heading1>How to use Cosmos?</Heading1>

        <Installation />
        <UsingComponents />
        <CustomComponents />
        <WithStyleguide />
      </div>
    )
  }
}

export default Usage
