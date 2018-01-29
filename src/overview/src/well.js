import React from 'react'

import Container from './container'
import { Form } from '../../components'
import { Well } from '../../components'

const Wells = () => (
  <Container title="Well">
    <Well>
      <Form>
        <Form.FieldSet label="Group 1">
          <Form.TextInput label="Field label" type="text" placeholder="Placeholder text" />
          <Form.TextInput label="This field has text" defaultValue="This is the field value" />
          <Form.Actions primaryAction={{ label: 'Save' }} />
        </Form.FieldSet>
      </Form>
    </Well>
  </Container>
)

export default Wells
