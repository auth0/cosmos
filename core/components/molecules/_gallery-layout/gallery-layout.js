import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import applyMarginReset from '../../_helpers/layout-margin-reset'
import { spacing } from '@auth0/cosmos-tokens'

const gutterOptions = {
  none: '0',
  condensed: spacing.small,
  default: spacing.medium,
  spacious: spacing.xlarge
}

const columnOptions = {
  condensed: 'repeat(auto-fill, minmax(150px, 1fr))',
  default: 'repeat(auto-fill, minmax(250px, 1fr))',
  spacious: 'repeat(auto-fill, minmax(450px, 1fr))'
}

const GalleryLayout = props => (
  <GalleryLayout.Element {...Automation('gallery-layout')}>
    {transformChildren(props, GalleryLayout.Item, 'gallery-layout.item')}
  </GalleryLayout.Element>
)

GalleryLayout.Element = styled.ul`
  display: grid;
  grid-template-columns: ${props => columnOptions[props.column]};
  grid-gap: ${props => gutterOptions[props.gutter]};

  ${applyMarginReset()};
`

GalleryLayout.Item = styled.li``

GalleryLayout.propTypes = {
  /** Regulates the size of the gutter betwen each column */
  gutter: PropTypes.oneOf(['none', 'default', 'condensed', 'spacious']),
  /** Regulates the size of the flexible columns */
  column: PropTypes.oneOf(['default', 'condensed', 'spacious']),
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  marginReset: PropTypes.oneOf(['none', 'reset'])
}

GalleryLayout.defaultProps = {
  marginReset: 'reset',
  column: 'default',
  gutter: 'default'
}

export default GalleryLayout
