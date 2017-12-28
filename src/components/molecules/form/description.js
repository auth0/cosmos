import React from 'react'
import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'

const StyledDescription = styled.div`
  font-size: 13px;
  color: ${colors.grayMedium};
  margin-top: ${spacing.xsmall};
`

const Description = props => <StyledDescription>{props.children}</StyledDescription>

export default Description
