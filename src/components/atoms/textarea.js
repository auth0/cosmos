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
  transition: border-color 0.25s, box-shadow 0.25s;

  &:hover {
    border-color: ${colors.grayMedium};
  }
  &:focus {
    border-color: ${colors.blue};
    box-shadow: 0px 0px 0 1px ${colors.blue};
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
