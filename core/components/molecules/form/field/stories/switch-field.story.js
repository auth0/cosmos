import React from 'react'
import { storiesOf } from '@storybook/react'
import { Example, Stack } from '@auth0/cosmos/_helpers/story-helpers'

import { Form } from '@auth0/cosmos'

storiesOf('Form', module).add('switch field', () => (
  <Example title="switch field">
    <Form>
      <Form.Switch label="Subscribe" on />
    </Form>
  </Example>
))

storiesOf('Form', module).add('switch field + error', () => (
  <Example title="switch field + error">
    <Form>
      <Form.Switch label="Subscribe" on error="Everything is broken" />
    </Form>
  </Example>
))
