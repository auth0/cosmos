import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'
import StyledPlaceholder from '../../_helpers/story-layout-placeholder'
import { GalleryLayout } from '../../'
import { layoutSpacingStoryTest } from '../../_helpers/story-layout'

storiesOf('Gallery Layout', module).add('Null children check', () =>
  layoutSpacingStoryTest(GalleryLayout, 'small')
)

storiesOf('Gallery Layout', module).add('Size: small', () => (
  <Example title="Size: small">
    <GalleryLayout size="small">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Size: small - with undisplayable children', () => (
  <Example title="Size: small">
    <GalleryLayout size="small">
      <StyledPlaceholder />
      {undefined}
      <StyledPlaceholder />
      {null}
      <StyledPlaceholder />
      {undefined}
      <StyledPlaceholder />
      {null}
      <StyledPlaceholder />
      {undefined}
      <StyledPlaceholder />
      {null}
      <StyledPlaceholder />
      {undefined}
      <StyledPlaceholder />
      {null}
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Size: medium', () => (
  <Example title="Size: medium">
    <GalleryLayout size="medium">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Size: large', () => (
  <Example title="Size: large">
    <GalleryLayout size="large">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Gutter: none', () => (
  <Example title="Gutter: none">
    <GalleryLayout size="small" gutter="none">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Gutter: xsmall', () => (
  <Example title="Gutter: xsmall">
    <GalleryLayout size="small" gutter="xsmall">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Gutter: small', () => (
  <Example title="Gutter: small">
    <GalleryLayout size="small" gutter="small">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Gutter: medium', () => (
  <Example title="Gutter: medium">
    <GalleryLayout size="small" gutter="medium">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))

storiesOf('Gallery Layout', module).add('Gutter: large', () => (
  <Example title="Gutter: large">
    <GalleryLayout size="small" gutter="large">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GalleryLayout>
  </Example>
))
