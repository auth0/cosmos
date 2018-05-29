import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form } from '@auth0/cosmos'

storiesOf('Form').add('layouts', () => (
  <div>
    <Example title="label-on-left">
      <Form>
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    </Example>
    <Example title="label-on-top">
      <Form layout="label-on-top">
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    </Example>
  </div>
))
