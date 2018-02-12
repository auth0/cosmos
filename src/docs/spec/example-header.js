import React from 'react'
import styled from 'styled-components'

import { Heading3 } from '../docs-components/typography'

const Header = styled.a`
  color: inherit;
  text-decoration: none;
`

const ExampleHeader = props => (
  <Header href="#">
    <Heading3>{props.children}</Heading3>
  </Header>
)

export default ExampleHeader
