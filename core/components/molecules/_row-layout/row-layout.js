import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import applyMarginReset from '../../_helpers/layout-margin-reset'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  none: 0,
  xsmall: spacing.xsmall, // 8
  small: spacing.small, // 16
  medium: spacing.medium, // 24
  large: spacing.xlarge // 40
}

const RowLayout = props => (
  <RowLayout.Element {...Automation('row-layout')} {...props}>
    {transformChildren(props, RowLayout.Item, 'row-layout.item')}
  </RowLayout.Element>
)

RowLayout.Element = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => gutterOptions[props.gutter]};

  ${applyMarginReset()};
`
RowLayout.Item = styled.div``

RowLayout.propTypes = {
  /** Regulates the size of the gutter between rows*/
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: PropTypes.bool
}

RowLayout.defaultProps = {
  gutter: 'medium'
}

export default RowLayout
