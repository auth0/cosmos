import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, fonts } from '../../../tokens'

const StyledParagraph = styled.p`
  color: ${colors.text.default};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

const Paragraph = props => <StyledParagraph {...props}>{props.children}</StyledParagraph>

Paragraph.propTypes = {}

Paragraph.defaultProps = {}

export default Paragraph
