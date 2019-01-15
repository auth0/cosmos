import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { PageHeader, Link, Text } from '@auth0/cosmos'

storiesOf('Page Header', module).add('default', () => (
  <Example title="default">
    <PageHeader
      title="Clients"
      description={
        <span>
          Setup a mobile, web or <Link href="https://auth0.com">IoT application</Link> to{' '}
          <Text type="strong">use Auth0 for Authentication</Text>.
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

storiesOf('Page Header', module).add('no actions', () => (
  <Example title="No actions">
    <PageHeader
      title="Clients"
      description={
        <span>
          Setup a mobile, web or IoT application to{' '}
          <Text type="strong">use Auth0 for Authentication</Text>.
        </span>
      }
    />
  </Example>
))

storiesOf('Page Header', module).add('no description', () => (
  <Example title="No description">
    <PageHeader title="Clients" />
  </Example>
))

storiesOf('Page Header', module).add('only primary action', () => (
  <Example title="default">
    <PageHeader
      title="Clients"
      description={
        <span>
          Setup a mobile, web or IoT application to{' '}
          <Text type="strong">use Auth0 for Authentication</Text>.
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

storiesOf('Page Header', module).add('only secondary action', () => (
  <Example title="default">
    <PageHeader
      title="Clients"
      description={
        <span>
          Setup a mobile, web or IoT application to{' '}
          <Text type="strong">use Auth0 for Authentication</Text>.
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

storiesOf('Page Header', module).add('only primary action with deprecated API', () => (
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

storiesOf('Page Header', module).add('only secondary action with deprecated API', () => (
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
      Setup a mobile, web or IoT application to{' '}
      <Text type="strong">use Auth0 for Authentication</Text>.
    </PageHeader>
  </Example>
))
