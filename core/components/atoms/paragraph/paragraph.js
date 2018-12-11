import React from 'react'
import styled from '@auth0/cosmos/styled'
import containerStyles from '@auth0/cosmos/_helpers/container-styles'

import { colors, fonts } from '@auth0/cosmos-tokens'

const Paragraph = props => (
  <Paragraph.Element margin={{ top: '1em', bottom: '1em', left: 0, right: 0 }} {...props}>
    {props.children}
  </Paragraph.Element>
)

Paragraph.Element = styled.p`
  ${containerStyles};
  color: ${colors.text.default};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

const StyledParagraph = Paragraph.Element

Paragraph.propTypes = {}

Paragraph.defaultProps = {}

export default Paragraph
export { StyledParagraph }
