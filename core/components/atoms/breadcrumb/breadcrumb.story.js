import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Breadcrumb } from '@auth0/cosmos'

storiesOf('Breadcrumb').add('default', () => (
  <Example title="default">
    <Breadcrumb>
      <Breadcrumb.Link href="/home">Home</Breadcrumb.Link>
      <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb').add('with icon', () => (
  <Example title="with icon">
    <Breadcrumb>
      <Breadcrumb.Link href="/home" icon="arrow-left">
        Home
      </Breadcrumb.Link>
      <Breadcrumb.Link href="/parent">Parent</Breadcrumb.Link>
      <Breadcrumb.Link href="/parent/child">Child</Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))

storiesOf('Breadcrumb').add('single link', () => (
  <Example title="single link">
    <Breadcrumb>
      <Breadcrumb.Link href="/home" icon="arrow-left">
        Back to applications
      </Breadcrumb.Link>
    </Breadcrumb>
  </Example>
))
