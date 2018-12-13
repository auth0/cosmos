import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { FormGroup, Form, TextInput } from '@auth0/cosmos'

storiesOf('Form Group').add('default', () => (
  <Example title="default">
    <FormGroup>
      <Form>
        <Form.FieldSet label="iOS Settings">
          <Form.Field label="Field label">
            <TextInput type="text" placeholder="Enter something" />
          </Form.Field>
          <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
        </Form.FieldSet>
      </Form>
      <Form layout="label-on-top">
        <Form.FieldSet label="Android Settings">
          <Form.Field label="Field label">
            <TextInput type="text" placeholder="Enter something" />
          </Form.Field>
          <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
        </Form.FieldSet>
      </Form>
    </FormGroup>
  </Example>
))
