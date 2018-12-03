import React from 'react'
import styled from 'styled-components'
import containerStyles from '@auth0/cosmos/_helpers/container-styles'

import { colors, fonts } from '@auth0/cosmos-tokens'
import margin from '../../_helpers/margin'

const Paragraph = props => <Paragraph.Element {...props}>{props.children}</Paragraph.Element>

Paragraph.Element = styled.p`
  ${containerStyles};
  margin: 1em 0;
  ${margin}; /* overrides */
  color: ${colors.text.default};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

const StyledParagraph = Paragraph.Element

Paragraph.propTypes = {}

Paragraph.defaultProps = {}

export default Paragraph
export { StyledParagraph }
