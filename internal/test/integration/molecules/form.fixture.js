import React from 'react'
import { Form } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Form id="custom-id">
        <Form.TextInput
          id="custom-id"
          label="Field label"
          type="text"
          placeholder="Enter something"
          onChange={event => mockFn(event)}
        />
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    )
  }
}

export default Fixture
