import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import applyMarginReset from '../../_helpers/layout-margin-reset'
import { spacing } from '@auth0/cosmos-tokens'

const gridTemplateColumns = {
  '1/2 1/2': 'repeat(2, 1fr)',
  '1/3 1/3 1/3': 'repeat(3, 1fr)',
  '2/3 1/3': '2fr 1fr',
  '1/3 2/3': '1fr 2fr',
  '1/4 1/4 1/4 1/4': `repeat(4, 1fr)`,
  '2/4 1/4 1/4': '2fr 1fr 1fr',
  '1/4 2/4 1/4': '1fr 2fr 1fr',
  '1/4 1/4 2/4': '1fr 1fr 2fr',
  '3/4 1/4': '3fr 1fr',
  '1/4 3/4': '1fr 3fr'
}

const gutterOptions = {
  none: 0,
  xsmall: spacing.xsmall, // 8
  small: spacing.small, // 16
  medium: spacing.medium, // 24
  large: spacing.xlarge // 40
}

const ColumnLayout = props => (
  <ColumnLayout.Element
    gutter={props.gutter}
    distribution={props.distribution}
    {...Automation('column-layout')}
  >
    {transformChildren(props, ColumnLayout.Item, 'column-layout.item')}
  </ColumnLayout.Element>
)

ColumnLayout.Element = styled.div`
  display: grid;
  grid-gap: ${props => gutterOptions[props.gutter]};
  grid-template-columns: 1fr;

  /* Placeholder width media feature until we have global variables for breakpoints */
  @media (min-width: 768px) {
    grid-template-columns: ${props => gridTemplateColumns[props.distribution]};
  }

  ${applyMarginReset()};
`

ColumnLayout.Item = styled.div``

ColumnLayout.propTypes = {
  /** Regulates the size of the gutter betwen each column */
  gutter: PropTypes.oneOf(['none', 'xsmall', 'small', 'medium', 'large']),
  /** Defines the distribution and amount of columns */
  distribution: PropTypes.oneOf([
    '1/2 1/2',
    '1/3 1/3 1/3',
    '2/3 1/3',
    '1/3 2/3',
    '1/4 1/4 1/4 1/4',
    '2/4 1/4 1/4',
    '1/4 2/4 1/4',
    '1/4 1/4 2/4',
    '3/4 1/4',
    '1/4 3/4'
  ]),
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset: PropTypes.bool
}

ColumnLayout.defaultProps = {
  gutter: 'medium',
  distribution: '1/2 1/2'
}

export default ColumnLayout
