import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  'none': 0,
  'default': spacing.medium,
  'condensed': spacing.small,
  'spacious': spacing.large
}


const RowLayout = props => (
  <RowLayout.Element gutter={props.gutter} distribution={props.distribution} {...Automation('row-layout')}>
    {transformChildren(props, RowLayout.Item, 'row-layout.item')}
  </RowLayout.Element>
)

RowLayout.Element = styled.div`
  > *:not(:last-child), > *:not(:only-child), > *:not(:empty) { 
    /* or only child */
    margin-bottom: ${props => gutterOptions[props.gutter]};
  }
`

RowLayout.Item = styled.div`
  /* For layouts to work any direct child of the item has to have their margin cleared. We are forcing it here. */
  /* remove margin reset prop */
  > * {
    margin: 0 !important;
  }
`

RowLayout.propTypes = {
  /* Regulates the size of the gutter */
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
}

RowLayout.defaultProps = {
  gutter: 'default',
}

export default RowLayout
