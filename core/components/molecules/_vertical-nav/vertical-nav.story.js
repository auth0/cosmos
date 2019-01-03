import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { VerticalNav } from '@auth0/cosmos'

storiesOf('Vertical Nav', module).add('default', () => (
  <Example title="default">
    <VerticalNav>
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
      <StyledPlaceholder />
    </VerticalNav>
  </Example>
))
