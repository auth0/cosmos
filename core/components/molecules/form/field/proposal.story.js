import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '@auth0/cosmos/_helpers/story-helpers'

import { Form, TextInput, TextArea, Switch, Stack } from '@auth0/cosmos'

storiesOf('Proposal').add('text field - old API', () => {
  const error = 'Everything is broken'
  return (
    <Example title="text field + error">
      <Form>
        <Form.TextInput
          label="Field label"
          type="text"
          placeholder="Enter something"
          error={error}
        />
      </Form>
    </Example>
  )
})

storiesOf('Proposal').add('text field - new API', () => {
  const error = 'Everything is broken'
  return (
    <Example title="text field + error">
      <Form>
        <Form.Field label="Field label" error={error}>
          <TextInput type="text" placeholder="Enter something" hasError={Boolean(error)} />
        </Form.Field>
      </Form>
    </Example>
  )
})

storiesOf('Proposal').add('text area - new API', () => {
  const error = 'Everything is broken'
  return (
    <Example title="text area">
      <Form>
        <Form.Field label="Field label" error={error}>
          <TextArea placeholder="Enter something" hasError={Boolean(error)} />
        </Form.Field>
      </Form>
    </Example>
  )
})

storiesOf('Proposal').add('actions - old API', () => {
  return (
    <Example title="mutliple fields + actions">
      <Form>
        <Form.TextInput
          label="Field label"
          type="text"
          placeholder="Enter something"
          actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
        />
        <Form.Switch label="Subscribe" on />
      </Form>
    </Example>
  )
})

storiesOf('Proposal').add('actions - new API', () => {
  return (
    <Example title="mutliple fields + actions">
      <Form>
        <Form.Field label="Field label">
          <TextInput
            placeholder="Enter something"
            actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
          />
        </Form.Field>
        <Form.Field label="Subscribe">
          <Switch on />
        </Form.Field>
      </Form>
    </Example>
  )
})

storiesOf('Proposal').add('custom field - same API', () => {
  const error = 'Everything is broken'

  const CustomField = props => {
    return (
      <Stack>
        <TextInput placeholder="Enter height" hasError={Boolean(error)} />
        <TextInput placeholder="Enter unit" hasError={Boolean(error)} />
      </Stack>
    )
  }
  return (
    <Example title="custom field">
      <Form>
        <Form.Field label="Field label" error={error}>
          <CustomField />
        </Form.Field>
      </Form>
    </Example>
  )
})
