import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'
import StyledPlaceholder from '../../_helpers/story-layout-placeholder'
import { ColumnLayout } from '../../'
import { layoutSpacingStoryTest } from '../../_helpers/story-layout'

storiesOf('Column Layout', module).add('Null children check', () =>
  layoutSpacingStoryTest(ColumnLayout, null, { distribution: '1/3 1/3 1/3' })
)

storiesOf('Column Layout', module).add('1/2 1/2', () => (
  <Example title="1/2 1/2">
    <ColumnLayout distribution="1/2 1/2">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('1/3 1/3 1/3', () => (
  <Example title="1/3 1/3 1/3">
    <ColumnLayout distribution="1/3 1/3 1/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('1/3 1/3 1/3 - with undisplayable children', () => (
  <Example title="1/3 1/3 1/3">
    <ColumnLayout distribution="1/3 1/3 1/3">
      <StyledPlaceholder />
      {undefined}
      <StyledPlaceholder />
      {null}
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('1/3 2/3', () => (
  <Example title="1/3 2/3">
    <ColumnLayout distribution="1/3 2/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('2/3 1/3', () => (
  <Example title="2/3 1/3">
    <ColumnLayout distribution="2/3 1/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('1/4 1/4 1/4 1/4', () => (
  <Example title="1/4 1/4 1/4 1/4">
    <ColumnLayout distribution="1/4 1/4 1/4 1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('2/4 1/4 1/4', () => (
  <Example title="2/4 1/4 1/4">
    <ColumnLayout distribution="2/4 1/4 1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('1/4 2/4 1/4', () => (
  <Example title="1/4 2/4 1/4">
    <ColumnLayout distribution="1/4 2/4 1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('1/4 1/4 2/4', () => (
  <Example title="1/4 1/4 2/4">
    <ColumnLayout distribution="1/4 1/4 2/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('1/4 3/4', () => (
  <Example title="1/4 3/4">
    <ColumnLayout distribution="1/4 3/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('3/4 1/4', () => (
  <Example title="3/4 1/4">
    <ColumnLayout distribution="3/4 1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('Gutter: none', () => (
  <Example title="Gutter: none">
    <ColumnLayout distribution="1/2 1/2" gutter="none">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('Gutter: xsmall', () => (
  <Example title="Gutter: xsmall">
    <ColumnLayout distribution="1/2 1/2" gutter="xsmall">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('Gutter: small', () => (
  <Example title="Gutter: small">
    <ColumnLayout distribution="1/2 1/2" gutter="small">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('Gutter: medium', () => (
  <Example title="Gutter: medium">
    <ColumnLayout distribution="1/2 1/2" gutter="medium">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout', module).add('Gutter: large', () => (
  <Example title="Gutter: large">
    <ColumnLayout distribution="1/2 1/2" gutter="large">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))
