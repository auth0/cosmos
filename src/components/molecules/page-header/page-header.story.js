import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { PageHeader } from '@auth0/cosmos'

storiesOf('Page Header').add('default', () => (
  <Example title="default">
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
  </Example>
))
