import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from 'auth0-cosmos-tokens'

const StyledDescription = styled.div`
  font-size: 13px;
  line-height: 1.8;
  color: ${colors.text.secondary};
  margin-top: ${spacing.xsmall};
  margin-bottom: ${spacing.xsmall};
`

const Description = props => <StyledDescription>{props.children}</StyledDescription>

export default Description
