import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import applyMarginReset, { applyLayoutChildClass } from '../../_helpers/layout-margin-reset'
import transformChildren from '../../_helpers/transform-layout-children'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  none: '0',
  condensed: spacing.small,
  default: spacing.medium,
  spacious: spacing.xlarge
}

const alignmentOptions = {
  center: 'center',
  end: 'flex-end',
  start: 'flex-start'
}

const distributionOptions = {
  spaceBetween: 'space-between',
  center: 'center',
  start: 'flex-start',
  end: 'flex-end'
}

const resolveSpace = (props, child, index) => {
  if (!props.space) return child

  return React.cloneElement(child, { space: props.space[index] })
}

const StackLayout = props => (
  <StackLayout.Element {...props} {...Automation('stack-layout')}>
    {React.Children.map(
      transformChildren(props, StackLayout.Item, 'stack-layout.item'),
      resolveSpace.bind(this, props)
    )}
  </StackLayout.Element>
)

StackLayout.Element = styled.div`
  display: flex;
  align-items: ${props => alignmentOptions[props.alignment]};
  justify-content: ${props => distributionOptions[props.distribution]};

  flex-wrap: ${props => (props.wrap ? 'nowrap' : 'wrap')};
  > *:not(:last-child) {
    margin-right: ${props => gutterOptions[props.gutter]};
  }
  ${applyMarginReset()};
`

StackLayout.Item = styled.div`
  flex: ${props => props.space};
  
  /* Avoids any component to be larger than it's parent */
  max-width: 100%;
  }
`

StackLayout.propTypes = {
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: PropTypes.bool,
  /** Regulates the size of the gutter between flexed items*/
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Vertically align the components within the stack. applyes to `align-items` */
  alignment: PropTypes.oneOf(['center', 'start', 'end']),
  /** Horizontally distribute the components within the stack. applyes to `justify-content` */
  distribution: PropTypes.oneOf(['spaceBetween', 'center', 'start', 'end']),
  /** Flex wrap */
  wrap: PropTypes.bool,
  /** Defines how much space each item within the stack container will take in relation to the others. For example and array of {[1, 2, 'none']} will make the third item follow the with of its content, and the second item take double the remind space than the first one. */
  space: PropTypes.arrayOf(PropTypes.string)
}

StackLayout.defaultProps = {
  gutter: 'default',
  flex: 'flex',
  alignment: 'center',
  distribution: 'start'
}

export default StackLayout
