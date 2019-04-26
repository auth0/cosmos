import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '../../../../_helpers/story-helpers'

import { Form, Switch } from '../../../../'

storiesOf('Form', module).add('switch field', () => (
  <Example title="switch field">
    <Form>
      <Form.Field label="Subscribe">
        <Switch on />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form', module).add('switch field + error', () => (
  <Example title="switch field + error">
    <Form>
      <Form.Field label="Subscribe" error="Everything is broken">
        <Switch on />
      </Form.Field>
    </Form>
  </Example>
))

storiesOf('Form', module).add('switch field - old API', () => (
  <Example title="old API">
    <Form>
      <Form.Switch on label="Subscribe" error="Everything is broken" />
    </Form>
  </Example>
))
