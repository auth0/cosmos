import React from 'react'
import styled from '@auth0/cosmos/styled'

import { colors, fonts } from '@auth0/cosmos-tokens'

const Code = props => <Code.Element {...props}>{props.children}</Code.Element>

Code.Element = styled.span`
  color: rgba(0, 0, 0, 0.86);
  font-family: ${fonts.family.code};
  font-size: 90%;
  padding: 0 6px;
  display: inline-block;
  background-color: ${colors.base.blueLightest};
  border-radius: 3px;
  line-height: 18px;
  word-break: break-all;
`

Code.propTypes = {}

Code.defaultProps = {}

export default Code
