import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import { Manager, Reference, Popper } from 'react-popper'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import { multiply } from '../../_helpers/pixel-calc'

import { colors, spacing, misc } from '@auth0/cosmos-tokens'

class Tooltip extends React.Component {
  constructor(props) {
    super(props)
    this.state = { visible: props.defaultVisible || false }
  }
  showTooltip = () => {
    this.setState({ visible: true })
  }
  hideTooltip = () => {
    if (this.props.defaultVisible) return
    this.setState({ visible: false })
  }
  render() {
    const { content, ...props } = this.props

    return (
      <Manager>
        <Reference>
          {({ ref }) => (
            <Tooltip.Trigger
              onMouseEnter={this.showTooltip}
              onFocus={this.showTooltip}
              onMouseLeave={this.hideTooltip}
              onBlur={this.hideTooltip}
              innerRef={ref}
              {...Automation('tooltip.trigger')}
            >
              {props.children}
            </Tooltip.Trigger>
          )}
        </Reference>
        <Popper
          placement={props.position}
          modifiers={{
            preventOverflow: { enabled: false },
            hide: { enabled: false },
            offset: { offset: '0, 10' }
          }}
        >
          {({ ref, style, placement, arrowProps }) => (
            <React.Fragment>
              {this.state.visible ? (
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
              ) : null}
            </React.Fragment>
          )}
        </Popper>
      </Manager>
    )
  }
}

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
`

Tooltip.Trigger = styled.div`
  display: inline-block;
  position: relative;
`

const arrowWidth = '6px'
const arrowColor = colors.tooltip.background

/*
  popper doesn't arrange the tooltip right in the center,
  so we add an adjustment
*/
const arrowAdjustment = multiply(arrowWidth, -2)

Tooltip.Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;

  &::before {
    content: '';
    margin: auto;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: ${arrowWidth};
    border-color: transparent;
  }

  &[data-placement*='top'] {
    bottom: 0;
    margin-left: ${arrowAdjustment};

    &::before {
      border-bottom-width: 0;
      border-top-color: ${arrowColor};
    }
  }

  &[data-placement*='right'] {
    left: 0;
    margin-top: ${arrowAdjustment};
    margin-left: -${arrowWidth};
    &::before {
      border-left-width: 0;
      border-right-color: ${arrowColor};
    }
  }

  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    margin-left: ${arrowAdjustment};
    margin-top: -${arrowWidth};
    &::before {
      border-top-width: 0;
      border-bottom-color: ${arrowColor};
    }
  }

  &[data-placement*='left'] {
    right: 0;
    margin-top: ${arrowAdjustment};
    &::before {
      border-right-width: 0;
      border-left-color: ${arrowColor};
    }
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
