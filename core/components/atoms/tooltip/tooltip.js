import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
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

const Tooltip = ({ content, ...props }) => (
  <Tooltip.Trigger>
    <Tooltip.Element {...props}>{content}</Tooltip.Element>
    {props.children}
  </Tooltip.Trigger>
)

Tooltip.Element = styled.div`
  position: absolute;
  background: ${colors.tooltip.background};
  color: ${colors.tooltip.text};
  border-radius: ${misc.radius};
  width: max-content;
  text-align: center;
  padding: ${spacing.xsmall};
  line-height: ${misc.lineHeight};
  font-size: 13px;
  pointer-events: none;
  opacity: ${props => (props.defaultVisible ? 1 : 0)};
  ${props => tooltipStyles[props.position]};
  max-width: 260px;

  &:after {
    position: absolute;
    content: '';
    width: 0;
    height: 0;
    border: 5.5px solid transparent;
    ${props => arrowStyles[props.position]};
  }
`

Tooltip.Trigger = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    ${Tooltip.Element} {
      opacity: 1;
    }
  }
`

const StyledTooltip = Tooltip.Element

/**
 * We renamed `Wrapper` to `Trigger` when migrating
 * to the dotElement API.
 * See: https://github.com/auth0/cosmos/pull/1080#discussion_r237026967
 */
const TooltipWrapper = Tooltip.Trigger

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
