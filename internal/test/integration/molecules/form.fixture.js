import React from 'react'
import { Form } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Form id="custom-id">
        <Form.TextInput
          id="custom-id"
          label="Field label"
          type="text"
          placeholder="Enter something"
        />
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
      </Form>
    )
  }
}

export default Fixture
