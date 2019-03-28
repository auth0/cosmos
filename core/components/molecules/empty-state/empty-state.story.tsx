import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { EmptyState } from '@auth0/cosmos'

storiesOf('EmptyState', module).add('default', () => (
  <Example title="default">
    <EmptyState
      title="Clients"
      text="Add some clients to get started"
      icon="users"
      helpUrl="https://auth0.com"
      action={{
        icon: 'plus',
        label: 'Create Client',
        handler: () => {}
      }}
    />
  </Example>
))

storiesOf('EmptyState', module).add('without action', () => (
  <Example title="without action">
    <EmptyState
      icon="folder-cancel"
      title="Files"
      link={{ href: 'https://auth0.com', target: '_blank' }}
    >
      We couldn't find files that match your search.
    </EmptyState>
  </Example>
))

storiesOf('EmptyState', module).add('stressed', () => (
  <Example title="stressed - 119 characters in title and text">
    <EmptyState
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut."
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vehicula massa augue, in consectetur tellus tristique ut."
      icon="users"
      helpUrl="https://auth0.com"
      action={{
        icon: 'plus',
        label: 'Create Client',
        handler: () => {}
      }}
    />
  </Example>
))
