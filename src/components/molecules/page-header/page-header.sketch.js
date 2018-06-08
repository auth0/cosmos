import React from 'react'
import { storiesOf } from '@storybook/react'

import { PageHeader } from '@auth0/cosmos'

storiesOf('PageHeader', module).add('default', () => (
  <PageHeader
    title="Clients"
    description={{
      text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
      learnMore: '/clients'
    }}
    primaryAction={{
      label: 'Create Client',
      icon: 'plus',
      handler: () => {}
    }}
    secondaryAction={{
      label: 'Tutorial',
      icon: 'play-circle',
      handler: () => {}
    }}
  />
))
