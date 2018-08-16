import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { PageHeader } from '@auth0/cosmos'

storiesOf('Page Header').add('default', () => (
  <Example title="default">
    <PageHeader
      title="Clients"
      description={
        <span>
          Setup a mobile, web or IoT application to <strong>use Auth0 for Authentication</strong>.
        </span>
      }
      learnMore="/link"
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

storiesOf('Page Header').add('only primary action', () => (
  <Example title="default">
    <PageHeader
      title="Clients"
      description={
        <span>
          Setup a mobile, web or IoT application to <strong>use Auth0 for Authentication</strong>.
          <Link href="/test">Learn more</Link>
        </span>
      }
      learnMore="/link"
      primaryAction={{
        label: 'Create Client',
        icon: 'plus',
        handler: () => {}
      }}
    />
  </Example>
))

storiesOf('Page Header').add('only secondary action', () => (
  <Example title="default">
    <PageHeader
      title="Clients"
      description={
        <span>
          Setup a mobile, web or IoT application to <strong>use Auth0 for Authentication</strong>.
        </span>
      }
      learnMore="/link"
      secondaryAction={{
        label: 'Tutorial',
        icon: 'play-circle',
        handler: () => {}
      }}
    />
  </Example>
))

storiesOf('Page Header').add('only primary action with deprecated API', () => (
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
    />
  </Example>
))

storiesOf('Page Header').add('only secondary action with deprecated API', () => (
  <Example title="default">
    <PageHeader
      title="Clients"
      description={{
        text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
        learnMore: '/clients'
      }}
      secondaryAction={{
        label: 'Tutorial',
        icon: 'play-circle',
        handler: () => {}
      }}
    >
      Setup a mobile, web or IoT application to <strong>use Auth0 for Authentication</strong>.
    </PageHeader>
  </Example>
))
