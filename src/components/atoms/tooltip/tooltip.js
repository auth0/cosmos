import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import { colors, spacing, misc } from '@auth0/cosmos-tokens'

const tooltipStyles = {
  top: css`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: ${spacing.xsmall};
  `,
  bottom: css`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: ${spacing.xsmall};
  `,
  left: css`
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: ${spacing.xsmall};
  `,
  right: css`
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: ${spacing.xsmall};
  `
}

const arrowStyles = {
  top: css`
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-top-width: 6px;
    border-bottom-width: 0;
    border-top-color: ${colors.tooltip.background};
  `,
  bottom: css`
    bottom: 100%;
    left: 50%;
    margin-left: -5px;
    border-bottom-width: 6px;
    border-top-width: 0;
    border-bottom-color: ${colors.tooltip.background};
  `,
  left: css`
    left: 100%;
    top: 50%;
    margin-top: -5px;
    border-left-width: 6px;
    border-right-width: 0;
    border-left-color: ${colors.tooltip.background};
  `,
  right: css`
    right: 100%;
    top: 50%;
    margin-top: -5px;
    border-right-width: 6px;
    border-left-width: 0;
    border-right-color: ${colors.tooltip.background};
  `
}

const StyledTooltip = styled.div`
  position: absolute;
  background: ${colors.tooltip.background};
  color: ${colors.tooltip.text};
  border-radius: ${misc.radius};
  width: max-content;
  text-align: center;
  padding: ${spacing.xsmall};
  line-height: normal;
  font-size: 13px;
  pointer-events: none;
  opacity: ${props => (props.defaultVisible ? 1 : 0)};
  ${props => tooltipStyles[props.position]};

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 5.5px solid transparent;
    ${props => arrowStyles[props.position]};
  }
`

const TooltipWrapper = styled.div`
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
    <TooltipWrapper>
      <StyledTooltip className="cosmos-tooltip" {...props}>
        {content}
      </StyledTooltip>
      {props.children}
    </TooltipWrapper>
  )
}

Tooltip.propTypes = {
  /** Content to show in the tooltip */
  content: PropTypes.string.isRequired,
  /** Where to place the tooltip */
  position: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
  /** Visible by default */
  defaultVisible: PropTypes.bool
}

Tooltip.defaultProps = {
  content: null,
  position: 'top',
  defaultVisible: false
}

export default Tooltip
