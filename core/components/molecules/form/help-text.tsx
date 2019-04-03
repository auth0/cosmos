import * as React from 'react'
import styled from '../../styled'

import { colors } from '@auth0/cosmos-tokens'

const StyledHelpText = styled.p`
  font-size: 13px;
  color: ${colors.text.secondary};
`

const HelpText = props => <StyledHelpText id={props.id}>{props.children}</StyledHelpText>

export default HelpText
