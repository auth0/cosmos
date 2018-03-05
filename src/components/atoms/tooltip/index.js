import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, misc } from 'auth0-cosmos-tokens'

const StyledTooltip = styled.div`
  background: ${colors.tooltip.background};
  color: ${colors.tooltip.text};
  border-radius: ${misc.radius};
  width: max-content;
  text-align: center;
  position: absolute;
  padding: ${spacing.xsmall};
  line-height: normal;
  font-size: 13px;
  left: 50%;
  transform: translateX(-50%);
  margin: ${spacing.xsmall} 0;
  pointer-events: none;
  opacity: 0;
  ${props =>
    props.bottom
      ? css`
          top: 100%;
        `
      : css`
          bottom: 100%;
        `};

  &:after {
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    left: 50%;
    position: absolute;
    margin-left: -5px;

    ${props =>
      props.bottom
        ? css`
            border-width: 0 5.5px 6px 5.5px;
            border-color: transparent transparent ${colors.tooltip.background} transparent;
            bottom: 100%;
          `
        : css`
            border-width: 6px 5.5px 0 5.5px;
            border-color: ${colors.tooltip.background} transparent transparent transparent;
            top: 100%;
          `};
  }
`

const ContentTooltip = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    ${StyledTooltip} {
      opacity: 1;
    }
  }
`

const Tooltip = ({ content, ...props }) => {
  return (
    <ContentTooltip>
      <StyledTooltip {...props}>{content}</StyledTooltip>
      {props.children}
    </ContentTooltip>
  )
}

Tooltip.propTypes = {
  /** Content to show in the tooltip */
  content: PropTypes.string.isRequired,
  /** Use to show tooltip on top */
  top: PropTypes.bool,
  /** Use to show tooltip on bottom */
  bottom: PropTypes.bool
}

Tooltip.defaultProps = {
  content: null,
  top: true,
  bottom: false
}

export default Tooltip
