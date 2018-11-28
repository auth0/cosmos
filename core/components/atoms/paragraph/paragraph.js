import React from 'react'
import styled from 'styled-components'
import containerStyles from '../../_helpers/container-styles'

import { colors, fonts } from '@auth0/cosmos-tokens'

const StyledParagraph = styled.p`
  ${containerStyles};
  margin: 1em 0;
  color: ${colors.text.default};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

const Paragraph = props => <StyledParagraph {...props}>{props.children}</StyledParagraph>

Paragraph.propTypes = {}

Paragraph.defaultProps = {}

export default Paragraph
export { StyledParagraph }
