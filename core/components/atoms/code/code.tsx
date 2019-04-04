import * as React from 'react'
import styled from '../../styled'

import { colors, fonts } from '../../tokens'
import Automation from '../../_helpers/automation-attribute'

export interface ICodeProps {
  /** HTML ID of the component */
  id?: string
  children?: React.ReactNode
  onClick?: React.ReactNode
}

const Code = (props: ICodeProps) => (
  <Code.Element {...Automation('code')} {...props}>
    {props.children}
  </Code.Element>
)

Code.Element = styled.span`
  color: rgba(0, 0, 0, 0.86);
  font-family: ${fonts.family.code};
  font-size: 90%;
  padding: 0 6px;
  display: inline-block;
  background-color: ${colors.base.blueLightest};
  border-radius: 3px;
  line-height: 18px;
  word-break: break-word;
`

Code.defaultProps = {}

export default Code
