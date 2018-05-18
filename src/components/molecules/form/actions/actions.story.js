import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form } from '@auth0/cosmos'

storiesOf('Form').add('actions: primary', () => (
  <Example title="primary">
    <Form>
      <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
    </Form>
  </Example>
))

storiesOf('Form').add('actions: primary + secondary', () => (
  <Example title="primary + secondary">
    <Form>
      <Form.Actions
        primaryAction={{ label: 'Save Changes', handler: () => {} }}
        secondaryActions={[
          { label: 'Try', icon: 'play', handler: () => {} },
          { label: 'Debug', handler: () => {} }
        ]}
      />
    </Form>
  </Example>
))
