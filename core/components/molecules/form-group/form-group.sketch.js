import React from 'react'
import { storiesOf } from '@storybook/react'

import { FormGroup, Form } from '@auth0/cosmos'

storiesOf('Form Group', module).add('multiple forms', () => (
  <FormGroup>
    <Form>
      <Form.FieldSet label="iOS Settings">
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      </Form.FieldSet>
      <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
    </Form>

    <Form>
      <Form.FieldSet label="Android Settings">
        <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      </Form.FieldSet>
      <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
    </Form>
  </FormGroup>
))
