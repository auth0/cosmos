import React from 'react'
import styled from 'styled-components'

import { Heading1, Subheader } from '../docs-components/typography'

const Headings = styled.div`
  margin-bottom: 3rem;
`

const Header = props => (
  <Headings>
    <Heading1>{props.displayName}</Heading1>
    <Subheader>{props.description}</Subheader>
  </Headings>
)

export default Header
