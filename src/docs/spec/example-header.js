import React from 'react'
import styled from 'styled-components'

import { fonts, spacing, colors } from '../../tokens'

const Header = styled.a`
  padding: ${spacing.small} 0;
  font-weight: ${fonts.weight.medium};
  display: block;
  font-size: 21px;
`

const ExampleHeader = props => <Header>{props.children}</Header>

export default ExampleHeader
