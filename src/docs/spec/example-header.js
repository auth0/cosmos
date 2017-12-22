import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../tokens'

const Header = styled.div`
  padding: ${spacing.small} 0;

  text-transform: uppercase;
  font-size: 14px;
  border-bottom: 1px solid ${colors.grayLight};
  margin-bottom: ${spacing.medium};
`

const ExampleHeader = props => <Header>{props.children}</Header>

export default ExampleHeader
