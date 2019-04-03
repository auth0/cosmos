import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { PageHeader, Link, Text, Button, Badge } from '../../'

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
      primaryAction={
        <Button icon="plus" onClick={() => { }}>
          Create Client
        </Button>
      }
      secondaryAction={
        <Button icon="play-circle" onClick={() => { }}>
          Tutorial
        </Button>
      }
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
      primaryAction={
        <Button icon="plus" onClick={() => { }}>
          Create Client
        </Button>
      }
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
      secondaryAction={
        <Button icon="play-circle" onClick={() => { }}>
          Tutorial
        </Button>
      }
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
      primaryAction={
        <Button icon="plus" onClick={() => { }}>
          Create Client
        </Button>
      }
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
      secondaryAction={
        <Button icon="play-circle" onClick={() => { }}>
          Tutorial
        </Button>
      }
    >
      Setup a mobile, web or IoT application to{' '}
      <Text type="strong">use Auth0 for Authentication</Text>.
    </PageHeader>
  </Example>
))

storiesOf('Page Header', module).add('with dynamic title', () => (
  <Example title="default">
    <PageHeader
      title={
        <React.Fragment>
          Hooks <Badge appearance="information">BETA</Badge>
        </React.Fragment>
      }
      description={{
        text: 'Setup a mobile, web or IoT application to use Auth0 for Authentication.',
        learnMore: '/clients'
      }}
      primaryAction={
        <Button icon="plus" onClick={() => { }}>
          Create Client
        </Button>
      }
    />
  </Example>
))
