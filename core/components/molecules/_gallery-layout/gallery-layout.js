import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import { spacing } from '@auth0/cosmos-tokens'

const marginReset = {
  none: 'auto',
  reset: '0 !important'
}

const GalleryLayout = props => (
  <GalleryLayout.Element {...Automation('gallery-layout')}>
    {transformChildren(props, GalleryLayout.Item, 'gallery-layout.item')}
  </GalleryLayout.Element>
)

GalleryLayout.Element = styled.ul`
  --GalleryLayout--GridTemplateColumns: repeat(auto-fill, minmax(250px, 1fr));

  display: grid;
  grid-template-columns: var(--GalleryLayout--GridTemplateColumns);
  grid-gap: ${spacing.large};

  /*
  Layout's Items direct children has to have their margin cleared so it doesn't generate double spacings.
  This is a fix that will last until we remove margins from components.
  */
  > * > * {
    margin: ${props => marginReset[props.marginReset]};
  }
`

GalleryLayout.Item = styled.li``

GalleryLayout.propTypes = {
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  marginReset: PropTypes.oneOf(['none', 'reset'])
}

GalleryLayout.defaultProps = {
  marginReset: 'reset'
}

export default GalleryLayout
