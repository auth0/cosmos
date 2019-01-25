import React from 'react'
import { Form } from '@auth0/cosmos'

const mockOnSubmit = jest.fn()
const mockPrimaryAction = jest.fn()
const mockSecondaryAction = jest.fn()
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
        <Form.Actions
          primaryAction={{ label: 'Save Changes', handler: mockPrimaryAction }}
          secondaryAction={[{ label: 'Reset', handler: mockSecondaryAction }]}
        />
      </Form>
    )
  }
}

Fixture.onSubmit = mockOnSubmit
Fixture.onPrimaryClick = mockPrimaryAction
Fixture.onSecondaryAction = mockSecondaryAction
Fixture.onInputChange = mockOnInputChange

export default Fixture
