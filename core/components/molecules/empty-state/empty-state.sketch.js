import React from 'react'
import { storiesOf } from '@storybook/react'

import { EmptyState } from '@auth0/cosmos'

storiesOf('EmptyState', module).add('default', () => (
  <EmptyState
    title="Clients"
    icon="clients"
    helpUrl="auth0.com"
    action={{ icon: 'plus', text: 'Create Client', handler: () => {} }}
  />
))
