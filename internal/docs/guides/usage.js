import React from 'react'
import Helmet from 'react-helmet'

import { Heading1, Heading2, Link, Text, Pre, Code, CodeBlock } from '../docs-components'

import Installation from './usage/installation'
import UsingComponents from './usage/using-components'
import CustomComponents from './usage/custom-components'
import WithStyleguide from './usage/with-styleguide'
import Layouts from './usage/layouts'
import OverridingStyles from './usage/overriding-styles'

class Usage extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="How to use Cosmos?" />
        <Heading1>How to use Cosmos?</Heading1>

        <Installation />
        <UsingComponents />
        <CustomComponents />
        <Layouts />
        <OverridingStyles />
        <WithStyleguide />
      </div>
    )
  }
}

export default Usage
