import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  none: 'var(--RowLayout--None--GridGap)',
  condensed: 'var(--RowLayout--Condensed--GridGap)',
  default: 'var(--RowLayout--Default--GridGap)',
  spacious: 'var(--RowLayout--Spacious--GridGap)'
}

const marginReset = {
  none: 'auto',
  reset: '0 !important'
}

const RowLayout = props => (
  <RowLayout.Element
    gutter={props.gutter}
    distribution={props.distribution}
    {...Automation('row-layout')}
  >
    {transformChildren(props, RowLayout.Item, 'row-layout.item')}
  </RowLayout.Element>
)

RowLayout.Element = styled.div`
  --RowLayout--None--GridGap: 0;
  --RowLayout--Condensed--GridGap: ${spacing.small};
  --RowLayout--Default--GridGap: ${spacing.medium};
  --RowLayout--Spacious--GridGap: ${spacing.large};
  --RowLayout--Header--Color: ${spacing.large};

  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${props => gutterOptions[props.gutter]};

  /* 
  Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
  This is a fix that will last until we remove margins from components.
  */
  > * > * {
    margin: ${props => marginReset[props.marginReset]};
  }
`
RowLayout.Item = styled.div``

RowLayout.propTypes = {
  /** Regulates the size of the gutter between rows*/
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Resets the margins of the component within the layout to generate consistent spaces. In doubt just leave it as `rest`. */
  marginReset: PropTypes.oneOf(['none', 'reset'])
}

RowLayout.defaultProps = {
  gutter: 'default',
  marginReset: 'reset'
}

export default RowLayout
