import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import { Manager, Reference, Popper } from 'react-popper'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

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
  onKeyDown = event => {
    /* this overrides defaultVisible as well */
    if (event.key === 'Escape') this.setState({ visible: false })
  }
  render() {
    const { id, content, ...props } = this.props
    let child

    /* There's just one child which is a React Element */
    if (React.Children.count(props.children) === 1 && React.isValidElement(props.children)) {
      child = React.cloneElement(props.children, { 'aria-describedby': id })
    } else {
      /* weird case, should not really happen */
      child = props.children
    }

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
              onKeyDown={this.onKeyDown}
              {...Automation('tooltip.trigger')}
            >
              {child}
            </Tooltip.Trigger>
          )}
        </Reference>
        <Popper placement={props.position} modifiers={{ preventOverflow: { enabled: false } }}>
          {({ ref, style, placement, arrowProps }) => (
            <React.Fragment>
              {this.state.visible ? (
                <Tooltip.Element
                  innerRef={ref}
                  style={style}
                  data-placement={placement}
                  id={id}
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
  /* make room for arrow */
  margin: 6px;
`

Tooltip.Trigger = styled.div`
  display: inline-block;
  position: relative;
`

/*
  The tooltip needs to have a margin to create
  space for the arrow
*/
const arrowSize = '12px;'
const tooltipMargin = arrowSize

/*
  To keep the arrow outside the tooltip,
  right and bottom need margin
*/
const arrowMargin = '-5px'

Tooltip.Arrow = styled.div`
  position: absolute;
  width: 0;
  height: 0;

  &[data-placement*='top'] {
    bottom: 0;
    margin-left: -${tooltipMargin};
    &::before {
      border-width: 6px 5.5px 0 6px;
      border-color: ${colors.tooltip.background} transparent transparent transparent;
    }
  }

  &[data-placement*='right'] {
    left: 0;
    margin-left: ${arrowMargin};
    margin-top: -${tooltipMargin};
    &::before {
      border-width: 6px 5.5px 6px 0;
      border-color: transparent ${colors.tooltip.background} transparent transparent;
    }
  }

  &[data-placement*='bottom'] {
    top: 0;
    left: 0;
    margin-top: ${arrowMargin};
    margin-left: -${tooltipMargin};
    &::before {
      border-width: 0 6px 5.5px 6px;
      border-color: transparent transparent ${colors.tooltip.background} transparent;
    }
  }

  &[data-placement*='left'] {
    right: 0;
    margin-top: -${tooltipMargin};
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
  /** Identifier for tooltip - important for accessibility */
  id: PropTypes.string,
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
