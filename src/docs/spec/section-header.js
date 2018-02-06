import React from 'react'
import styled from 'styled-components'

import { Heading2 } from '../docs-components/typography'

const Header = styled.a`
  color: inherit;
  text-decoration: none;
`

const SectionHeader = props => (
  <Header href="#">
    <Heading2>{props.children}</Heading2>
  </Header>
)

export default SectionHeader
