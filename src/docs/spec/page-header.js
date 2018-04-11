import React from 'react'
import styled from 'styled-components'
import startCase from 'lodash.startcase'

import { Heading1, Subheader } from '../docs-components/typography'

const Headings = styled.div`
  margin-bottom: 3rem;
  white-space: normal;
`

const Header = props => (
  <Headings>
    <Heading1>{startCase(props.displayName)}</Heading1>
    <Subheader>{props.description}</Subheader>
  </Headings>
)

export default Header
