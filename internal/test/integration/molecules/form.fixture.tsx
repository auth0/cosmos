import * as React from 'react'
import { Form, TextInput } from '@auth0/cosmos'

const mockOnSubmit = jest.fn()
const mockPrimaryAction = jest.fn()
const mockSecondaryAction = jest.fn()

class Fixture extends React.Component {
  static onSubmit = mockOnSubmit
  static onPrimaryClick = mockPrimaryAction
  static onSecondaryAction = mockSecondaryAction

  render() {
    return (
      <Form id="custom-id" onSubmit={mockOnSubmit}>
        <Form.Field label="Field label">
          <TextInput type="text" id="custom-id" placeholder="Enter something" />
        </Form.Field>
        <Form.Actions
          primaryAction={{ label: 'Save Changes', handler: mockPrimaryAction }}
          secondaryActions={[{ label: 'Reset', handler: mockSecondaryAction }]}
        />
      </Form>
    )
  }
}

export default Fixture
