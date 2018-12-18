import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form, TextInput } from '@auth0/cosmos'

storiesOf('Form').add('text field', () => (
  <Example title="text field">
    <Form>
      <Form.Field label="Field label">
        <TextInput type="text" placeholder="Enter something" />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form').add('text field + error', () => (
  <Example title="text field + error">
    <Form>
      <Form.Field label="Field label" error="Everything is broken">
        <TextInput type="text" placeholder="Enter something" hasError={true} />
      </Form.Field>
    </Form>
  </Example>
))

const textInputForSize = size => (
  <Form.Field label="Field label">
    <TextInput
      type="text"
      size={size}
      placeholder="Enter something"
      actions={[
        { icon: 'copy', handler: () => {}, label: 'Copy to clipboard' },
        { icon: 'delete', handler: () => {}, label: 'Delete' }
      ]}
    />
  </Form.Field>
)

storiesOf('Form').add('text field + actions', () => (
  <Example title="text field + actions">
    <Form>
      {textInputForSize('default')}
      {textInputForSize('large')}
      {textInputForSize('small')}
      {textInputForSize('compressed')}
    </Form>
  </Example>
))

storiesOf('Form').add('old API', () => (
  <Example title="old API">
    <Form>
      <Form.TextInput
        label="Field label"
        error="Everything is broken"
        type="text"
        placeholder="Enter something"
        actions={[
          { icon: 'copy', handler: () => {}, label: 'Copy to clipboard' },
          { icon: 'delete', handler: () => {}, label: 'Delete' }
        ]}
      />
    </Form>
  </Example>
))
