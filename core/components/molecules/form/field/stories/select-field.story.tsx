import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example } from '../../../../_helpers/story-helpers'

import { Form, Select } from '../../../../'

storiesOf('Form', module).add('select field', () => (
  <Example title="select field">
    <Form>
      <Form.Field label="Options list">
        <Select
          value={1}
          options={[
            { text: 'First option', value: '1' },
            { text: 'Second option', value: '2' },
            { text: 'Third option', value: '3' },
            { text: 'Fourth option', value: '4' }
          ]}
          onChange={event => console.log(event)}
        />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form', module).add('select field + error', () => (
  <Example title="select field + error">
    <Form>
      <Form.Field label="Options list" error="Everything is broken">
        <Select
          hasError={true}
          value={1}
          options={[
            { text: 'First option', value: '1' },
            { text: 'Second option', value: '2' },
            { text: 'Third option', value: '3' },
            { text: 'Fourth option', value: '4' }
          ]}
          onChange={event => console.log(event)}
        />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form', module).add('select field - old API', () => (
  <Example title="old API">
    <Form>
      <Form.Select
        label="Options list"
        error="Everything is broken"
        value={1}
        options={[
          { text: 'First option', value: '1' },
          { text: 'Second option', value: '2' },
          { text: 'Third option', value: '3' },
          { text: 'Fourth option', value: '4' }
        ]}
        onChange={event => console.log(event)}
      />
    </Form>
  </Example>
))
