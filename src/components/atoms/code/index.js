import React from 'react'
import styled from 'styled-components'

import { colors, fonts } from '../../../tokens/'

const StyledCode = styled.span`
  color: rgba(0, 0, 0, 0.86);
  font-family: ${fonts.family.code};
  font-size: 90%;
  padding: 0 6px;
  display: inline-block;
  background-color: ${colors.base.blueLightest};
  border-radius: 3px;
  line-height: 18px;
`

const Code = props => <StyledCode {...props}>{props.children}</StyledCode>

Code.propTypes = {}

Code.defaultProps = {}

export default Code
