import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import applyMarginReset, { applyLayoutChildClass } from '../../_helpers/layout-margin-reset'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  none: '0',
  condensed: spacing.small,
  default: spacing.medium,
  spacious: spacing.xlarge
}

const alignmentOptions = {
  center: 'center',
  fill: `stretch`,
  baseline: `baseline`,
  trailing: 'flex-start',
  leading: 'flex-end'
}

const distributionOptions = {
  equalSpacing: 'space-between',
  fill: 'space-around',
  fillEvenly: 'space-evenly',
  stretch: 'stretch',
  center: 'center',
  leading: 'flex-start',
  trailing: 'flex-end'
}

const FlexLayout = props => (
  <FlexLayout.Element {...props} {...Automation('flex-layout')}>
    {applyLayoutChildClass(props.children)}
  </FlexLayout.Element>
)

FlexLayout.Element = styled.div`
  display: flex;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  align-items: ${props => alignmentOptions[props.alignment]};
  justify-content: ${props => distributionOptions[props.distribution]};

  flex-wrap: ${props => (props.wrap ? 'wrap' : 'no-wrap')};
  > *:not(:last-child) {
    margin-right: ${props => gutterOptions[props.gutter]};
  }
  ${applyMarginReset()};
`

FlexLayout.Item = styled.div`
  flex-grow: ${props => (props.grow ? '1' : '0')};
  flex-shrink: ${props => (props.shrink ? '1' : '0')};
  flex-basis: ${props => props.width}%;

  padding: 1rem;
  border: 3px dotted violet;
  
  }
`

FlexLayout.propTypes = {
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: PropTypes.bool,
  /** Regulates the size of the gutter between flexed items*/
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** alignItems */
  alignment: PropTypes.oneOf(['center', 'fill', 'baseline', 'trailing', 'leading']),
  /** Justify Content */
  distribution: PropTypes.oneOf([
    'equalSpacing',
    'fill',
    'fillEvenly',
    'stretch',
    'center',
    'leading',
    'trailing'
  ]),
  /** Flex wrap */
  wrap: PropTypes.bool,
  /** Flex vertical */
  vertical: PropTypes.bool,
  /** Flex grow */
  grow: PropTypes.bool,
  /** Flex shrink */
  shrink: PropTypes.bool,
  /** Flex basis measured in %, if unset then it takes the value `auto` */
  width: PropTypes.number
}

FlexLayout.defaultProps = {
  gutter: 'default',
  flex: 'flex'
}

export default FlexLayout
