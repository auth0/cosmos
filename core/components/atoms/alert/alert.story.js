import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'
import { Alert, Link, Text } from '@auth0/cosmos'

const types = ['default', 'information', 'success', 'warning', 'danger']

storiesOf('Alert').add('default', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} key={type}>
        <span>
          This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
        </span>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert').add('with string text', () => (
  <Example>
    {types.map(type => <Alert type={type} key={type} text="This is the alert content" />)}
  </Example>
))

storiesOf('Alert').add('with title', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" key={type}>
        <span>
          This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
        </span>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert').add('with title and children', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" key={type}>
        <span>This is the alert content</span>
      </Alert>
    ))}
  </Example>
))

storiesOf('Alert').add('with title and link', () => (
  <Example>
    {types.map(type => (
      <Alert type={type} title="A title" link="/test" key={type}>
        <span>
          This is the <Text type="strong">alert</Text> <Link href="#">content</Link>.
        </span>
      </Alert>
    ))}
  </Example>
))