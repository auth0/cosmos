import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../../_helpers/story-helpers'

import { Form, TextInput, TextArea } from '../../../'

storiesOf('Form', module).add('fieldset', () => (
  <Example title="fieldset">
    <Form>
      <Form.FieldSet label="Group 1">
        <Form.Field label="Field label">
          <TextInput type="text" placeholder="Enter something" />
        </Form.Field>
        <Form.Field label="Long input">
          <TextArea placeholder="Add a lot of text here" />
        </Form.Field>
      </Form.FieldSet>

      <Form.FieldSet label="Group 2">
        <Form.Field label="Field label">
          <TextInput type="text" placeholder="Enter something" />
        </Form.Field>
        <Form.Field label="Field label">
          <TextInput type="text" placeholder="Enter something" />
        </Form.Field>
      </Form.FieldSet>
    </Form>
  </Example>
))
