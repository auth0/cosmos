import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors, fonts, spacing, misc } from '../../tokens/'

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 10em;
  box-sizing: border-box;
  padding: ${spacing.xsmall} ${spacing.small};

  background: ${colors.white};
  box-shadow: none;

  border: 1px solid ${colors.grayLight};
  border-radius: ${misc.radius};

  font-family: ${props => (props.code ? fonts.family.code : 'inherit')};

  &:hover {
    border-color: ${colors.grayMedium};
  }
  &:focus {
    border-color: ${colors.blue};
    outline: none;
  }
`

const Textarea = props => <StyledTextarea {...props} />

Textarea.propTypes = {
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string
}

Textarea.defaultProps = {
  readOnly: false,
  code: false,
  error: null
}

export default Textarea
export { StyledTextarea }
