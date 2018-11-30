import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { ColumnLayout } from '@auth0/cosmos'

storiesOf('Column Layout').add('1/2 1/2', () => (
  <Example title="1/2 1/2">
    <ColumnLayout distribution="1/2 1/2">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout').add('1/3 1/3 1/3', () => (
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

storiesOf('Column Layout').add('1/3 2/3', () => (
  <Example title="1/3 2/3">
    <ColumnLayout distribution="1/3 2/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout').add('2/3 1/3', () => (
  <Example title="2/3 1/3">
    <ColumnLayout distribution="2/3 1/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout').add('1/4 1/4 1/4 1/4', () => (
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

storiesOf('Column Layout').add('2/4 1/4 1/4', () => (
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

storiesOf('Column Layout').add('1/4 2/4 1/4', () => (
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

storiesOf('Column Layout').add('1/4 1/4 2/4', () => (
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

storiesOf('Column Layout').add('1/4 3/4', () => (
  <Example title="1/4 3/4">
    <ColumnLayout distribution="1/4 3/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout').add('3/4 1/4', () => (
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

storiesOf('Column Layout').add('condensed', () => (
  <Example title="condensed">
    <ColumnLayout distribution="1/2 1/2" gutter="condensed">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))

storiesOf('Column Layout').add('spacious', () => (
  <Example title="spacious">
    <ColumnLayout distribution="1/2 1/2" gutter="spacious">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))
