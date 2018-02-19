import React from 'react'

import Example from '../ov-components/example'
import Section from '../ov-components/section'
import { Form, FormGroup } from '../../components'

const fakeMethod = e => {
  e.preventDefault()
  alert('fired!')
}

const Forms = () => (
  <Section>
    <Example title="Form: Layout with labels-on-left">
      <Form layout="label-on-left">
        <Form.TextInput
          label="Field with helper text"
          defaultValue="This is the field value"
          placeholder="Placeholder text"
          description="Name of the connection to be use for Password Grant exchanges. The `default_directory` value
        should be the exact name of an existing connections of one of the following."
        />
        <Form.TextInput
          label="Text input with actions"
          code
          defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUipe"
          actions={[
            { icon: 'reveal', method: fakeMethod, label: 'Reveal' },
            { icon: 'copy', method: fakeMethod, label: 'Copy to clipboard' }
          ]}
        />
        <Form.TextInput
          label="Field with error"
          defaultValue="1234"
          error="The length should be more than 10 characters"
        />
        <Form.TextArea
          label="Textarea"
          resizable={false}
          placeholder="Add a description in less than 140 characters"
        />
        <Form.Select
          label="Select"
          options={[
            { text: 'One', value: 1, defaultSelected: true },
            { text: 'Two', value: 2 },
            { text: 'Three', value: 3 }
          ]}
        />
        <Form.Switch label="Switch" on onToggle={() => fakeMethod} />
        <Form.Actions primaryAction={{ label: 'Save' }} />
      </Form>
    </Example>

    <Example title="Form: Layout with labels-on-top">
      <Form layout="label-on-top">
        <Form.TextInput
          label="Field with helper text"
          defaultValue="This is the field value"
          placeholder="Placeholder text"
          description="Name of the connection to be use for Password Grant exchanges. The `default_directory` value
        should be the exact name of an existing connections of one of the following."
        />
        <Form.TextInput
          label="Text input with actions"
          code
          defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUipe"
          actions={[
            { icon: 'reveal', method: fakeMethod, label: 'Reveal' },
            { icon: 'copy', method: fakeMethod, label: 'Copy to clipboard' }
          ]}
        />
        <Form.TextInput
          label="Field with error"
          defaultValue="1234"
          error="The length should be more than 10 characters"
        />
        <Form.TextArea
          label="Textarea"
          resizable={false}
          placeholder="Add a description in less than 140 characters"
        />
        <Form.Select
          label="Select"
          options={[
            { text: 'One', value: 1, defaultSelected: true },
            { text: 'Two', value: 2 },
            { text: 'Three', value: 3 }
          ]}
        />
        <Form.Switch label="Switch" on onToggle={() => fakeMethod} />
        <Form.Actions primaryAction={{ label: 'Save' }} />
      </Form>
    </Example>

    <Example title="Form: Actions">
      <Form layout="label-on-top">
        <Form.Actions
          primaryAction={{ label: 'Save' }}
          secondaryActions={[
            {
              label: 'Clear'
            }
          ]}
        />
      </Form>
    </Example>

    <Example title="Form: Fieldset">
      <Form>
        <Form.FieldSet label="Fieldset Label" />
      </Form>
    </Example>

    <Example title="Form Groups">
      <FormGroup>
        <Form>
          <Form.FieldSet label="Form Title">
            <Form.TextInput label="This field has text" defaultValue="This is the field value" />
            <Form.Actions primaryAction={{ label: 'Save' }} />
          </Form.FieldSet>
        </Form>
      </FormGroup>
    </Example>
  </Section>
)

export default Forms
