import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '../../../../_helpers/story-helpers'

import { Form, TextInput, Button } from '../../../../'

storiesOf('Form', module).add('text field', () => (
  <Example title="text field">
    <Form>
      <Form.Field label="Field label">
        <TextInput type="text" placeholder="Enter something" />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form', module).add('text field + error', () => (
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
        <Button icon="copy" onClick={e => console.log(e)} />,
        <Button icon="delete" onClick={e => console.log(e)} />
      ]}
    />
  </Form.Field>
)

storiesOf('Form', module).add('text field + actions', () => (
  <Example title="text field + actions">
    <Form>
      {textInputForSize('default')}
      {textInputForSize('large')}
      {textInputForSize('small')}
      {textInputForSize('compressed')}
    </Form>
  </Example>
))

storiesOf('Form', module).add('text field - old API', () => (
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
