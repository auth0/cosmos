import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'

import { Heading1 } from '../docs-components/typography'

import Setup from './contribution-guide/setup'
import SystemGuidelines from './contribution-guide/system-guidelines'
import Architecture from './contribution-guide/architecture'
import ComponentFiles from './contribution-guide/component-files'
import Testing from './contribution-guide/testing'
import LineHeight from './contribution-guide/line-height'
import OrderOfProps from './contribution-guide/order-of-props'
import ReleaseProcess from './contribution-guide/release-process'

class ContributionGuide extends React.Component {
  render() {
    return (
      <div>
        <Helmet title="Documentation &mdash; Cosmos" />

        <Heading1>Contributing to Cosmos</Heading1>

        <Setup />
        <SystemGuidelines />
        <Architecture />
        <ComponentFiles />
        <Testing />
        <LineHeight />
        <OrderOfProps />
        <ReleaseProcess />
      </div>
    )
  }
}

export default ContributionGuide
