import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../_helpers/story-helpers'

import { FormGroup, Form, TextInput } from '../../'

storiesOf('Form Group', module).add('default', () => (
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
