import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form } from '@auth0/cosmos'

storiesOf('Form Field', module).add('text input', () => (
  <Form>
    <Form.TextInput
      label="Field label"
      type="text"
      placeholder="Enter something"
      actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
    />
  </Form>
))

storiesOf('Form Field', module).add('text input + help text', () => (
  <Form>
    <Form.TextInput
      label="Field label"
      type="text"
      placeholder="Enter something"
      helpText="Help text to give some context to the user"
      actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
    />
  </Form>
))

storiesOf('Form Field', module).add('text input + error', () => (
  <Form>
    <Form.TextInput
      label="Field label"
      type="text"
      placeholder="Enter something"
      helpText="Help text to give some context to the user"
      error="This value cannot be blank"
      actions={[{ icon: 'copy', handler: () => {}, label: 'Copy to clipboard' }]}
    />
  </Form>
))

storiesOf('Form Field', module).add('text area', () => (
  <Form>
    <Form.TextArea label="Long input" placeholder="Add a lot of text here" />
  </Form>
))

storiesOf('Form Field', module).add('text area + help text', () => (
  <Form>
    <Form.TextArea
      label="Long input"
      placeholder="Add a lot of text here"
      helpText="Help text to give some context to the user"
    />
  </Form>
))

storiesOf('Form Field', module).add('text area + error', () => (
  <Form>
    <Form.TextArea
      label="Long input"
      placeholder="Add a lot of text here"
      helpText="Help text to give some context to the user"
      error="This value cannot be blank"
    />
  </Form>
))

storiesOf('Form Field', module).add('select', () => (
  <Form>
    <Form.Select
      label="Options list"
      options={[
        { text: 'First option', value: '1', defaultSelected: true },
        { text: 'Second option', value: '2' },
        { text: 'Third option', value: '3' },
        { text: 'Fourth option', value: '4' }
      ]}
    />
  </Form>
))

storiesOf('Form Field', module).add('select + help text', () => (
  <Form>
    <Form.Select
      label="Options list"
      options={[
        { text: 'First option', value: '1', defaultSelected: true },
        { text: 'Second option', value: '2' },
        { text: 'Third option', value: '3' },
        { text: 'Fourth option', value: '4' }
      ]}
      helpText="Help text to give some context to the user"
    />
  </Form>
))

storiesOf('Form Field', module).add('select + error', () => (
  <Form>
    <Form.Select
      label="Options list"
      options={[
        { text: 'First option', value: '1', defaultSelected: true },
        { text: 'Second option', value: '2' },
        { text: 'Third option', value: '3' },
        { text: 'Fourth option', value: '4' }
      ]}
      helpText="Help text to give some context to the user"
      error="This value cannot be blank"
    />
  </Form>
))

storiesOf('Form Field', module).add('switch', () => (
  <Form>
    <Form.Switch label="Subscribe" on />
  </Form>
))

storiesOf('Form Field', module).add('switch + help text', () => (
  <Form>
    <Form.Switch label="Subscribe" on helpText="Help text to give some context to the user" />
  </Form>
))

storiesOf('Form Field', module).add('switch + error', () => (
  <Form>
    <Form.Switch
      label="Subscribe"
      on
      helpText="Help text to give some context to the user"
      error="You are not allowed to enable this"
    />
  </Form>
))

storiesOf('Form Field', module).add('radio', () => (
  <Form>
    <Form.Radio name="example1" selected="one">
      <Form.Radio.Option value="one">One</Form.Radio.Option>
      <Form.Radio.Option value="two">Two</Form.Radio.Option>
    </Form.Radio>
  </Form>
))

storiesOf('Form Field', module).add('radio + help text', () => (
  <Form>
    <Form.Radio
      name="example1"
      selected="one"
      helpText="Help text to give some context to the user"
    >
      <Form.Radio.Option value="one">One</Form.Radio.Option>
      <Form.Radio.Option value="two">Two</Form.Radio.Option>
    </Form.Radio>
  </Form>
))
storiesOf('Form Field', module).add('radio + error', () => (
  <Form>
    <Form.Radio
      name="example1"
      selected="one"
      helpText="Help text to give some context to the user"
      error="Please select at least one option"
    >
      <Form.Radio.Option value="one">One</Form.Radio.Option>
      <Form.Radio.Option value="two">Two</Form.Radio.Option>
    </Form.Radio>
  </Form>
))
