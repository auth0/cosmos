import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'
import transformChildren from '../../_helpers/transform-layout-children'
import applyMarginReset from '../../_helpers/layout-margin-reset'
import { spacing } from '../../tokens'

const gutterOptions = {
  none: 0,
  xsmall: spacing.xsmall, // 8
  small: spacing.small, // 16
  medium: spacing.medium, // 24
  large: spacing.xlarge // 40
}

const galleryOptions = {
  small: 'repeat(auto-fill, minmax(150px, 1fr))',
  medium: 'repeat(auto-fill, minmax(250px, 1fr))',
  large: 'repeat(auto-fill, minmax(450px, 1fr))'
}

export interface IGalleryLayoutProps {
  /** Regulates the size of the gutter betwen each column */
  gutter?: 'none' | 'xsmall' | 'small' | 'medium' | 'large'
  /** Regulates the size of the flexible columns */
  size?: 'small' | 'medium' | 'large'
  /** Resets the margins of the component within the layout to generate consistent spaces. */
  disableMarginReset?: boolean
  children?: React.ReactNode
}

const GalleryLayout = (props: IGalleryLayoutProps) => (
  <GalleryLayout.Element {...props} {...Automation('gallery-layout')}>
    {transformChildren(props, GalleryLayout.Item, 'gallery-layout.item')}
  </GalleryLayout.Element>
)

GalleryLayout.Element = styled.ul`
  display: grid;
  grid-template-columns: ${props => galleryOptions[props.size]};
  grid-gap: ${props => gutterOptions[props.gutter]};

  & > *:empty {
    display: none;
  }

  ${applyMarginReset()};
`

GalleryLayout.Item = styled.li``


GalleryLayout.defaultProps = {
  size: 'medium',
  gutter: 'medium'
}

export default GalleryLayout
