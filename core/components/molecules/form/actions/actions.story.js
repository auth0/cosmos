import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form } from '@auth0/cosmos'

storiesOf('Form', module).add('actions: primary', () => (
  <Example title="primary">
    <Form>
      <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
    </Form>
  </Example>
))

storiesOf('Form', module).add('actions: primary + secondary', () => (
  <Example title="primary + secondary">
    <Form>
      <Form.Actions
        primaryAction={{ label: 'Save Changes', handler: () => {} }}
        secondaryActions={[
          { label: 'Try', icon: 'play', handler: () => {} },
          { label: 'Play', icon: 'play', handler: () => {} }
        ]}
      />
    </Form>
  </Example>
))

storiesOf('Form', module).add('actions: primary + destructive', () => (
  <Example title="primary + destructive">
    <Form>
      <Form.Actions
        primaryAction={{ label: 'Save Changes', handler: () => {} }}
        destructiveAction={{ label: 'Delete', icon: 'delete', handler: () => {} }}
      />
    </Form>
  </Example>
))
