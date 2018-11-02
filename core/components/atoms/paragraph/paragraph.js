import React from 'react'
import styled from 'styled-components'

import { colors, fonts } from '@auth0/cosmos-tokens'
import margin from '../../_helpers/margin'

const StyledParagraph = styled.p`
  margin: 1em 0;
  ${margin}; /* overrides */
  color: ${colors.text.default};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

const Paragraph = props => <StyledParagraph {...props}>{props.children}</StyledParagraph>

Paragraph.propTypes = {}

Paragraph.defaultProps = {}

export default Paragraph
export { StyledParagraph }
