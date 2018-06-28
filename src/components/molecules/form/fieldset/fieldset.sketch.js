import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form } from '@auth0/cosmos'

storiesOf('Form Fieldset', module).add('with groups', () => (
  <Form>
    <Form.FieldSet label="Group 1">
      <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      <Form.TextArea label="Long input" placeholder="Add a lot of text here" />
    </Form.FieldSet>

    <Form.FieldSet label="Group 2">
      <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    </Form.FieldSet>
  </Form>
))
