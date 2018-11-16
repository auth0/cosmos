import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import StyledPlaceholder from '@auth0/cosmos/_helpers/story-layout-placeholder'
import { AppFrame } from '@auth0/cosmos'

storiesOf('App Frame').add('default', () => (
  <Example title="default">
    <AppFrame>
      <StyledPlaceholder />
    </AppFrame>
  </Example>
))
