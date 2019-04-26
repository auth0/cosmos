import React from 'react'

import Example from '../components/example'
import Section from '../components/section'
import { Code, Form, FormGroup, Radio } from '@auth0/cosmos'

const fakeMethod = (e) => {
  e.preventDefault()
  console.log('fired')
}

const Forms = () => (
  <Section>
    <Example title="Form: Layout with labels-on-left">
      <Form layout="label-on-left">
        <Form.TextInput
          label="Field with helper text"
          defaultValue="This is the field value"
          placeholder="Placeholder text"
          helpText={
            <span>
              Name of the connection to be use for Password Grant exchanges. The{' '}
              <Code>default_directory</Code>
              value should be the exact name of an existing connections of one of the following.
            </span>
          }
        />
        <Form.TextInput
          label="Text input with actions"
          code
          defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUipe"
          actions={[
            { icon: 'rotate', handler: fakeMethod, label: 'Rotate' },
            { icon: 'copy', handler: fakeMethod, label: 'Copy to clipboard' }
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
        <Form.Radio label="Radio" selected="react" name="Stack">
          <Radio.Option name="view" value="react">
            React
          </Radio.Option>
          <Radio.Option name="view" value="html">
            HTML + Liquid
          </Radio.Option>
        </Form.Radio>
        <Form.Switch label="Switch" on onToggle={() => fakeMethod} />
        <Form.Actions primaryAction={{ label: 'Save', handler: fakeMethod }} />
      </Form>
    </Example>

    <Example title="Form: Layout with labels-on-top">
      <Form layout="label-on-top">
        <Form.TextInput
          label="Field with helper text"
          defaultValue="This is the field value"
          placeholder="Placeholder text"
          helpText={
            <span>
              Name of the connection to be use for Password Grant exchanges. The{' '}
              <Code>default_directory</Code>
              value should be the exact name of an existing connections of one of the following.
            </span>
          }
        />
        <Form.TextInput
          label="Text input with actions"
          code
          defaultValue="DUq0xuJZAD7RvezvqCrA6hpJVb6iDUipe"
          actions={[
            { icon: 'rotate', handler: fakeMethod, label: 'Rotate' },
            { icon: 'copy', handler: fakeMethod, label: 'Copy to clipboard' }
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
        <Form.Radio align="horizontal" label="Radio" selected="react" name="Stack">
          <Radio.Option name="view" value="react">
            React
          </Radio.Option>
          <Radio.Option name="view" value="html">
            HTML + Liquid
          </Radio.Option>
        </Form.Radio>
        <Form.Switch label="Switch" on onToggle={() => fakeMethod} />
        <Form.Actions primaryAction={{ label: 'Save', handler: fakeMethod }} />
      </Form>
    </Example>

    <Example title="Form: Actions">
      <Form layout="label-on-top">
        <Form.Actions
          primaryAction={{ label: 'Save', handler: fakeMethod }}
          secondaryActions={[
            {
              label: 'Try',
              icon: 'play',
              handler: fakeMethod
            }
          ]}
        />
      </Form>
    </Example>

    <Example title="Form: Fieldset">
      <Form>
        <Form.FieldSet label="Danger Zone" />
      </Form>
    </Example>

    <Example title="Form Groups">
      <FormGroup>
        <Form>
          <Form.FieldSet label="First Form">
            <Form.TextInput label="This field has text" defaultValue="This is the field value" />
            <Form.Actions
              primaryAction={{ label: 'Save', handler: fakeMethod }}
              secondaryActions={[
                {
                  label: 'Try',
                  icon: 'play',
                  handler: fakeMethod
                }
              ]}
            />
          </Form.FieldSet>
        </Form>
        <Form>
          <Form.FieldSet label="Second form">
            <Form.TextInput label="This field has text" defaultValue="This is the field value" />
            <Form.Actions
              primaryAction={{ label: 'Save', handler: fakeMethod }}
              secondaryActions={[
                {
                  label: 'Try',
                  icon: 'play',
                  handler: fakeMethod
                }
              ]}
            />
          </Form.FieldSet>
        </Form>
      </FormGroup>
    </Example>
  </Section>
)

export default Forms
