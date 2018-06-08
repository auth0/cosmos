import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form } from '@auth0/cosmos'

storiesOf('Form', module).add('all fields', () => (
  <Form>
    <Form.TextInput
      label="Field label"
      type="text"
      placeholder="Enter something"
      helpText="This is some helper text"
    />
    <Form.TextArea
      label="Long input"
      placeholder="Add a lot of text here"
      error="Can't leave this empty"
    />
    <Form.Select
      label="Options list"
      options={[
        { text: 'First option', value: '1', defaultSelected: true },
        { text: 'Second option', value: '2' },
        { text: 'Third option', value: '3' },
        { text: 'Fourth option', value: '4' }
      ]}
    />
    <Form.Switch label="Single Sign On" on onToggle={value => alert(value)} />
    <Form.Radio name="Radio" selected="one">
      <Form.Radio.Option value="React">React</Form.Radio.Option>
      <Form.Radio.Option value="html">HTML + Liquid</Form.Radio.Option>
    </Form.Radio>
    <Form.Actions
      primaryAction={{ label: 'Save Changes', handler: () => {} }}
      secondaryActions={[
        { label: 'Clear', handler: () => {} },
        { label: 'Cancel', handler: () => {} }
      ]}
    />
  </Form>
))

storiesOf('Form', module).add('with fieldsets', () => (
  <Form>
    <Form.FieldSet label="Group 1">
      <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      <Form.TextArea label="Long input" placeholder="Add a lot of text here" />
    </Form.FieldSet>

    <Form.FieldSet label="Group 2">
      <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
      <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
    </Form.FieldSet>
    <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
  </Form>
))
