import React from 'react'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'
import { spacing } from '@auth0/cosmos-tokens'

const GalleryLayout = props => (
  <GalleryLayout.Element {...Automation('gallery-layout')}>
    {props.children.map(child => (
      <GalleryLayout.Item {...Automation('gallery-layout.item')}>{child}</GalleryLayout.Item>
    ))}
  </GalleryLayout.Element>
)

GalleryLayout.Element = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: ${spacing.large};
`

GalleryLayout.Item = styled.div``

export default GalleryLayout
