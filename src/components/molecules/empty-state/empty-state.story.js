import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { EmptyState } from '@auth0/cosmos'

storiesOf('EmptyState').add('default', () => (
  <Example title="default">
    <EmptyState
      title="Clients"
      text="Add some clients to get started"
      icon="users"
      helpUrl="https://auth0.com"
      action={{
        icon: 'plus',
        text: 'Create Client',
        handler: () => {}
      }}
    />
  </Example>
))
