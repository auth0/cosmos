import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form } from '@auth0/cosmos'

storiesOf('Form', module).add('fieldset', () => (
  <Example title="fieldset">
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
  </Example>
))
