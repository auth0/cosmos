import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form, TextInput, Button, Switch } from '@auth0/cosmos'

const CustomField = props => {
  console.log('receives props?', props)
  const { id, hasError } = props
  return (
    <Stack>
      <TextInput placeholder="Value" id={id} hasError={hasError} />
      <TextInput placeholder="Unit" hasError={hasError} />
    </Stack>
  )
}

storiesOf('Form').add('custom field - depreacted API', () => (
  <Example title="switch field">
    <Form>
      <Form.Field label="What's your height?">
        <CustomField />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form').add('custom field', () => (
  <Example title="switch field">
    <Form>
      <Form.Field label="What's your height?" as={CustomField} />
    </Form>
  </Example>
))

storiesOf('Form').add('custom field with error', () => (
  <Example title="switch field">
    <Form>
      <Form.Field label="What's your height?" as={CustomField} error="Value not found" />
    </Form>
  </Example>
))
