import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form, TextInput, TextArea } from '@auth0/cosmos'

storiesOf('Form').add('text field', () => (
  <Example title="text field">
    <Form>
      <Form.Field as={TextInput} label="Field label" type="text" placeholder="Enter something" />
    </Form>
  </Example>
))

storiesOf('Form').add('text field + error', () => (
  <Example title="text field + error">
    <Form>
      <Form.Field
        as={TextInput}
        label="Field label"
        error="Everything is broken"
        type="text"
        placeholder="Enter something"
      />
    </Form>
  </Example>
))

const textInputForSize = size => (
  <Form.Field
    as={TextInput}
    label="Field label"
    type="text"
    size={size}
    placeholder="Enter something"
    actions={[
      { icon: 'copy', handler: () => {}, label: 'Copy to clipboard' },
      { icon: 'delete', handler: () => {}, label: 'Delete' }
    ]}
  />
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
