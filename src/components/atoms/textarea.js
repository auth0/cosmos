import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { colors, fonts, spacing, misc } from "../../tokens/";

const StyledTextArea = styled.textarea`
  width: 100%;

  box-sizing: border-box;
  padding: ${spacing.xsmall} ${spacing.small};

  background: ${colors.white};
  box-shadow: none;

  border: 1px solid #ccc;
  border-radius: ${misc.radius};

  font-family: ${props => (props.code ? fonts.family.code : "inherit")};
  transition: border-color ${misc.animationDuration},
    box-shadow ${misc.animationDuration};

  resize: ${props => (props.resize ? "vertical" : "none")};

  &:hover {
    border-color: ${colors.grayMedium};
  }
  &:focus {
    border-color: ${colors.blue};
    box-shadow: 0px 0px 0 1px ${colors.blue};
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: ${colors.grayMedium};
  }
`;

const TextArea = props => (
  <StyledTextArea rows={props.length || 5} {...props} />
);

TextArea.propTypes = {
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass error string directly to show error state */
  error: PropTypes.string,
  /** Allow resizing of the textarea */
  resizeable: PropTypes.bool
};

TextArea.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  resizeable: false
};

export default TextArea;
export { StyledTextArea };
