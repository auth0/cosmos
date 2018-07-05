import React from 'react'
import { storiesOf } from '@storybook/react'

import { Form } from '@auth0/cosmos'

storiesOf('Form Actions', module).add('only primary', () => (
  <Form>
    <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
  </Form>
))

storiesOf('Form Actions', module).add('primary + secondary actions', () => (
  <Form>
    <Form.Actions
      primaryAction={{ label: 'Save Changes', handler: () => {} }}
      secondaryActions={[
        { label: 'Clear', handler: () => {} },
        { label: 'Cancel', handler: () => {} }
      ]}
    />
  </Form>
))
