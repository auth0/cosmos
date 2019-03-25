import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Breadcrumb } from '@auth0/cosmos'

storiesOf('Breadcrumb', module).add('default', () => (
  <Example title="default">
    <Breadcrumb>
      <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
      <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb', module).add('with icon', () => (
  <Example title="with icon">
    <Breadcrumb>
      <Breadcrumb.Link href="/home" icon="home-fill">
        Home
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb', module).add('single link', () => (
  <Example title="single link">
    <Breadcrumb>
      <Breadcrumb.Link href="/home" icon="arrow-left-fill">
        Back to applications
      </Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb', module).add('stressed', () => (
  <Example title="stressed - 56 characters per link">
    <Breadcrumb>
      <Breadcrumb.Link href="/home">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))
