import React from 'react'
import styled from 'styled-components'

import { colors, fonts } from '../../tokens/'

const StyledCode = styled.span`
  color: rgba(0, 0, 0, 0.86);
  font-family: ${fonts.family.code};
  font-size: 90%;
  padding: 4px 4px;
  font-weight: 500;
  line-height: 1;
  display: inline-block;
  background-color: #f5f7f9;
  border-radius: 3px;
  word-break: break-all;
`

const Code = props => <StyledCode {...props}>{props.children}</StyledCode>

Code.propTypes = {}

Code.defaultProps = {}

export default Code
