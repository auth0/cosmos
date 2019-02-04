import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { RowLayout, ColumnLayout } from '@auth0/cosmos'

storiesOf('Row Layout', module).add('Gutter: None', () => (
  <Example title="Gutter: None">
    <RowLayout gutter="none">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

storiesOf('Row Layout', module).add('Gutter: Extra Small', () => (
  <Example title="Gutter: Extra Small">
    <RowLayout gutter="xsmall">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

storiesOf('Row Layout', module).add('Gutter: Extra Small - with undisplayable children', () => (
  <Example title="Gutter: Extra Small">
    <RowLayout gutter="xsmall">
      <StyledPlaceholder />
      {null}
      {undefined}
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

storiesOf('Row Layout', module).add('Gutter: Small', () => (
  <Example title="Gutter: Small">
    <RowLayout gutter="small">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

storiesOf('Row Layout', module).add('Gutter: Medium', () => (
  <Example title="Gutter: Medium">
    <RowLayout gutter="medium">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

storiesOf('Row Layout', module).add('Gutter: Large', () => (
  <Example title="Gutter: Large">
    <RowLayout gutter="large">
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </RowLayout>
  </Example>
))

// Grid Test
storiesOf('Row & Column Grid', module).add('Gutter: test', () => (
  <Example title="Gutter: test">
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

storiesOf('Row & Column Grid', module).add('Gutter: test - with undisplayable children', () => (
  <Example title="Gutter: test">
    <ColumnLayout distribution="2/4 1/4 1/4">
      <RowLayout>
        {undefined}
        <ColumnLayout distribution="1/3 2/3">
          <StyledPlaceholder />
          {null}
        </ColumnLayout>
        <StyledPlaceholder />
      </RowLayout>
      {undefined}
      <StyledPlaceholder />
    </ColumnLayout>
  </Example>
))
