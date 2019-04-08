import * as React from 'react'
import { FormGroup, Form } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <FormGroup id="custom-id">
        <Form>
          <Form.FieldSet label="iOS Settings">
            <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
            <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
          </Form.FieldSet>
        </Form>

        <Form>
          <Form.FieldSet label="Android Settings">
            <Form.TextInput label="Field label" type="text" placeholder="Enter something" />
            <Form.Actions primaryAction={{ label: 'Save Changes', handler: () => {} }} />
          </Form.FieldSet>
        </Form>
      </FormGroup>
    )
  }
}

export default Fixture
