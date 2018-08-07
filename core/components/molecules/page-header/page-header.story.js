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
        handler: () => { }
      }}
      secondaryAction={{
        label: 'Tutorial',
        icon: 'play-circle',
        handler: () => { }
      }}
    />
  </Example>
))

storiesOf('Page Header').add('only primary action', () => (
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
        handler: () => { }
      }}
    />
  </Example>
))

storiesOf('Page Header').add('only secondary action', () => (
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
        handler: () => { }
      }}
    />
  </Example>
))

storiesOf('Page Header').add('stressed', () => (
  <Example title="stressed - 97 characters in title and 739 characters in description.text">
    <PageHeader
      title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin pellentesque."
      description={{
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam sollicitudin pellentesque. Ut magna ex, ultricies in risus eget, laoreet lacinia nunc. Suspendisse mi leo, facilisis auctor massa non, congue interdum nunc. Donec eget sem id odio accumsan posuere ut ac neque. Etiam nec varius elit. Vivamus pharetra vulputate neque ut dignissim. Etiam ut malesuada nisl. Proin eget nulla venenatis ligula fringilla sodales sed in enim. Etiam luctus sollicitudin mollis. Duis a varius felis, quis egestas quam. Suspendisse sollicitudin varius condimentum. Nam accumsan placerat diam nec pretium. Vestibulum sed accumsan tellus. Nullam dictum lorem vel orci porta scelerisque. Nulla malesuada nibh ante, id dapibus felis fermentum eget.',
        learnMore: '/clients'
      }}
      primaryAction={{
        label: 'Create Client',
        icon: 'plus',
        handler: () => { }
      }}
      secondaryAction={{
        label: 'Tutorial',
        icon: 'play-circle',
        handler: () => { }
      }}
    />
  </Example>
))