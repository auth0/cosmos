import React from 'react'
import { Alert } from '@auth0/cosmos'

const mockFn = jest.fn()

class Fixture extends React.Component {
  render() {
    return (
      <Alert id="custom-id" icon="notes" type="default" title="FYI!" onDismiss={mockFn}>
        Just a regular message
      </Alert>
    )
  }
}

/* Convention: Attach mock function to fixture */
Fixture.mockFn = mockFn

export default Fixture
