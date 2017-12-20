import React from 'react'
import styled from 'styled-components'

import { Heading3 } from '../../components/'
import { spacing } from '../../tokens'

const Header = styled.div`
  padding: ${spacing.large} 0;
`

const SectionHeader = props => (
  <Header>
    <Heading3>{props.children}</Heading3>
  </Header>
)

export default SectionHeader
