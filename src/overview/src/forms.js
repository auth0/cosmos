import React from 'react'

import Container from './container'
import { Form, Code, Link } from '../../components'

const fakeMethod = e => {
  e.preventDefault()
  alert('fired!')
}

const Forms = () => (
  <Container title="Forms">
    <Form>
      <Form.TextInput label="Field label" type="text" placeholder="Placeholder text" />
      <Form.TextInput label="This field has text" defaultValue="This is the field value" />
      <Form.TextInput label="Readonly field" readOnly placeholder="Placeholder text" />
      <Form.TextInput
        label="Field with helper text"
        placeholder="Placeholder text"
        description="Name of the connection to be use for Password Grant exchanges. The `default_directory` value
        should be the exact name of an existing connections of one of the following."
      />
      <Form.TextInput
        label="Field with helper text"
        placeholder="Placeholder text"
        description={
          <span>
            Name of the connection to be use for Password Grant exchanges. The{' '}
            <Code>default_directory</Code>
            value should be the exact name of an existing connections of{' '}
            <Link href="">one of the following.</Link>
          </span>
        }
      />
      <Form.TextInput
        label="Text input with actions"
        actions={[{ icon: 'copy', method: fakeMethod }]}
      />
      <Form.TextInput label="Text input with error" error="The field name is required" />
      <Form.TextArea
        label="Text input with error"
        placeholder="Add a description in less than 140 characters"
      />
      <Form.Select
        label="Select with options"
        options={[
          { text: 'One', value: 1, defaultSelected: true },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ]}
      />
      <Form.Switch label="Switches are fun" on onToggle={() => fakeMethod} />
      <Form.Actions
        primaryAction={{ label: 'Save' }}
        secondaryActions={[
          {
            label: 'Clear'
          }
        ]}
        destructiveActions={[{ label: 'Delete' }]}
      />
    </Form>
  </Container>
)

export default Forms
