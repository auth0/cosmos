import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form } from '@auth0/cosmos'

storiesOf('Form').add('select field', () => (
  <Example title="select field">
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
  </Example>
))

storiesOf('Form').add('select field + error', () => (
  <Example title="select field + error">
    <Form>
      <Form.Select
        label="Options list"
        error="Everything is broken"
        options={[
          { text: 'First option', value: '1', defaultSelected: true },
          { text: 'Second option', value: '2' },
          { text: 'Third option', value: '3' },
          { text: 'Fourth option', value: '4' }
        ]}
      />
    </Form>
  </Example>
))
