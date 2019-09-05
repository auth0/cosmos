import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form, TextArea } from '@auth0/cosmos'

storiesOf('Form', module).add('textarea field', () => (
  <Example title="textarea field">
    <Form>
      <Form.Field label="Field label">
        <TextArea type="text" placeholder="Enter something" />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form', module).add('textarea field + error', () => (
  <Example title="textarea field + error">
    <Form>
      <Form.Field label="Field label" error="Everything is broken">
        <TextArea type="text" placeholder="Enter something" hasError={true} />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form', module).add('textarea-field old API', () => (
  <Example title="old API">
    <Form>
      <Form.TextArea
        label="Field label"
        error="Everything is broken"
        placeholder="Enter something"
      />
    </Form>
  </Example>
))
