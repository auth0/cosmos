import * as React from 'react'
import styled from '../../styled'
import containerStyles from '../../_helpers/container-styles'
import Automation from '../../_helpers/automation-attribute'

import { colors, fonts } from '../../tokens'

const Paragraph = props => (
  <Paragraph.Element {...Automation('paragraph')} {...props}>
    {props.children}
  </Paragraph.Element>
)

Paragraph.Element = styled.p`
  ${containerStyles};
  margin: 1em 0;
  color: ${colors.text.default};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

const StyledParagraph = Paragraph.Element

export default Paragraph
export { StyledParagraph }
