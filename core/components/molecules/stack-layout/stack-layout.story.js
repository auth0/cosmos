import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { StackLayout } from '@auth0/cosmos'

storiesOf('Stack Layout').add('default', () => (
  <Example title="default">
    <StackLayout>
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </StackLayout>
  </Example>
))
