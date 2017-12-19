import React from 'react'

import Container from './container'
import { Form } from '../../components'

const Forms = () => (
  <Container title="Forms">
    <Form>
      <Form.TextInput label="Field label" type="text" placeholder="Placeholder text" />
      <Form.TextInput label="This field has text" defaultValue="This is the field value" />
      <Form.TextInput label="Readonly field" readOnly placeholder="Placeholder text" />
      <Form.TextInput
        label="Field with helper text"
        placeholder="Placeholder text"
        description="Name of the connection to be use for Password Grant exchanges. The default_directory value
        should be the exact name of an existing connections of one of the following."
      />
      <Form.TextInput label="Text input with error" error="The field name is required" />
      <Form.TextArea
        label="Text input with error"
        placeholder="Add a description in less than 140 characters"
      />
    </Form>
  </Container>
)

export default Forms
