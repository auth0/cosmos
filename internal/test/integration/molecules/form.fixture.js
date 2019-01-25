import React from 'react'
import { Form } from '@auth0/cosmos'

const mockOnSubmit = event => {
  event.preventDefault()
  jest.fn()
}
const mockPrimaryAction = jest.fn()
const mockOnInputChange = jest.fn()

class Fixture extends React.Component {
  render() {
    return (
      <Form id="custom-id">
        <Form.TextInput
          id="custom-id"
          label="Field label"
          type="text"
          placeholder="Enter something"
          onChange={mockOnInputChange}
          onSubmit={mockOnSubmit}
        />
        <Form.Actions primaryAction={{ label: 'Save Changes', handler: mockPrimaryAction }} />
      </Form>
    )
  }
}

Fixture.onPrimaryClick = mockPrimaryAction
Fixture.onSubmit = mockOnSubmit
Fixture.onInputChange = mockOnInputChange

export default Fixture
