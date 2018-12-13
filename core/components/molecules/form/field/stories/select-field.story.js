import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form, Select } from '@auth0/cosmos'

storiesOf('Form').add('select field', () => (
  <Example title="select field">
    <Form>
      <Form.Field label="Options list">
        <Select
          options={[
            { text: 'First option', value: '1', defaultSelected: true },
            { text: 'Second option', value: '2' },
            { text: 'Third option', value: '3' },
            { text: 'Fourth option', value: '4' }
          ]}
        />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form').add('select field + error', () => (
  <Example title="select field + error">
    <Form>
      <Form.Field label="Options list" error="Everything is broken">
        <Form.Select
          options={[
            { text: 'First option', value: '1', defaultSelected: true },
            { text: 'Second option', value: '2' },
            { text: 'Third option', value: '3' },
            { text: 'Fourth option', value: '4' }
          ]}
        />
      </Form.Field>
    </Form>
  </Example>
))
