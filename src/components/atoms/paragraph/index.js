import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, fonts } from '../../../tokens'

const Paragraph = styled.p`
  color: ${colors.text.default};
  font-size: 14px;
  font-weight: ${fonts.weight.normal};
`

Paragraph.propTypes = {}

Paragraph.defaultProps = {}

export default Paragraph
