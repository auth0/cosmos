import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { GridLayout } from '@auth0/cosmos'

storiesOf('Grid Layout').add('1/2', () => (
  <Example title="1/2">
    <GridLayout distribution="1/2" gutter="default">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))


storiesOf('Grid Layout').add('1/3', () => (
  <Example title="1/3">
    <GridLayout distribution="1/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('1/3 2/3', () => (
  <Example title="1/3 2/3">
    <GridLayout distribution="1/3 2/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('2/3 1/3', () => (
  <Example title="2/3 1/3">
    <GridLayout distribution="2/3 1/3">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('1/4', () => (
  <Example title="1/4">
    <GridLayout distribution="1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('2/4 1/4 1/4', () => (
  <Example title="2/4 1/4 1/4">
    <GridLayout distribution="2/4 1/4 1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('1/4 2/4 1/4', () => (
  <Example title="1/4 2/4 1/4">
    <GridLayout distribution="1/4 2/4 1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('1/4 1/4 2/4', () => (
  <Example title="1/4 1/4 2/4">
    <GridLayout distribution="1/4 1/4 2/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('1/4 3/4', () => (
  <Example title="1/4 3/4">
    <GridLayout distribution="1/4 3/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('3/4 1/4', () => (
  <Example title="3/4 1/4">
    <GridLayout distribution="3/4 1/4">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('condensed', () => (
  <Example title="condensed">
    <GridLayout distribution="1/2" gutter="condensed">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))

storiesOf('Grid Layout').add('spacious', () => (
  <Example title="spacious">
    <GridLayout distribution="1/2" gutter="spacious">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </GridLayout>
  </Example>
))
