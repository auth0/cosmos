import React from 'react'
import styled from '@auth0/cosmos/styled'

import { spacing, colors } from '@auth0/cosmos-tokens'

const StyledHelpText = styled.p`
  font-size: 13px;
  color: ${colors.text.secondary};
`

const HelpText = props => <StyledHelpText>{props.children}</StyledHelpText>

export default HelpText
