import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import { Manager, Reference, Popper } from 'react-popper'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, spacing, misc } from '@auth0/cosmos-tokens'

const Tooltip = ({ content, ...props }) => (
  <Manager>
    <Reference>
      {({ ref }) => <Tooltip.Trigger innerRef={ref}>{props.children}</Tooltip.Trigger>}
    </Reference>
    <Popper placement={props.position} modifiers={{ preventOverflow: { enabled: false } }}>
      {({ ref, style, placement, arrowProps }) => (
        <Tooltip.Element
          innerRef={ref}
          style={style}
          data-placement={placement}
          {...Automation('tooltip')}
          {...props}
        >
          {content}
          <Tooltip.Arrow
            data-placement={placement}
            innerRef={arrowProps.ref}
            style={arrowProps.style}
          />
        </Tooltip.Element>
      )}
    </Popper>
  </Manager>
)

Tooltip.Trigger = styled.div`
  display: inline-block;
  position: relative;

  &:hover {
    ${Tooltip.Element} {
      opacity: 1;
    }
  }
`

Tooltip.Element = styled.div`
  background: ${colors.tooltip.background};
  color: ${colors.tooltip.text};
  border-radius: ${misc.radius};
  width: max-content;
  text-align: center;
  padding: ${spacing.xsmall};
  line-height: ${misc.lineHeight};
  font-size: 13px;
  pointer-events: none;
  max-width: 260px;
  /* make room for arrow */
  margin: 6px;
  /* opacity: ${props => (props.defaultVisible ? 1 : 0)}; */
`

Tooltip.Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;

  &[data-placement*='top'] {
    bottom: 0;
    margin-left: -12px;
    &::before {
      border-width: 6px 5.5px 0 6px;
      border-color: ${colors.tooltip.background} transparent transparent transparent;
    }
  }

  &[data-placement*='right'] {
    left: 0;
    margin-left: -5px;
    margin-top: -12px;
    &::before {
      border-width: 6px 5.5px 6px 0;
      border-color: transparent ${colors.tooltip.background} transparent transparent;
    }
  }

  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    margin-top: -5px;
    margin-left: -12px;
    &::before {
      border-width: 0 6px 5.5px 6px;
      border-color: transparent transparent ${colors.tooltip.background} transparent;
    }
  }

  &[data-placement*='left'] {
    right: 0;
    margin-top: -12px;
    &::before {
      border-width: 6px 0 6px 5.5px;
      border-color: transparent transparent transparent ${colors.tooltip.background};
    }
  }
  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
  }
`

/**
 * We renamed `Wrapper` to `Trigger` when migrating
 * to the dotElement API.
 * See: https://github.com/auth0/cosmos/pull/1080#discussion_r237026967
 */
const TooltipWrapper = Tooltip.Trigger
const StyledTooltip = Tooltip.Element

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
