import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { RowLayout, ColumnLayout } from '@auth0/cosmos'


storiesOf('Row Layout').add('default', () => (
  <Example title="default">
    <RowLayout>
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

storiesOf('Row Layout').add('condensed', () => (
  <Example title="condensed">
    <RowLayout gutter="condensed">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

storiesOf('Row Layout').add('spacious', () => (
  <Example title="spacious">
    <RowLayout gutter="spacious">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))



// Test

storiesOf('Row & Column Grid').add('test', () => (
  <Example title="test">
    <ColumnLayout distribution="2/4 1/4 1/4">
      <RowLayout>
        <StyledPlaceholder />
        <ColumnLayout distribution="1/3 2/3">
          <StyledPlaceholder />
          <StyledPlaceholder />
        </ColumnLayout>
        <StyledPlaceholder />
      </RowLayout>
      <StyledPlaceholder />
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))
