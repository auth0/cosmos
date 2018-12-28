import React from 'react'
import { Button } from '@auth0/cosmos'

const mockFn = jest.fn()

class Fixture extends React.Component {
  render() {
    return (
      <Button id="custom-id" onClick={event => mockFn(event)}>
        Button
      </Button>
    )
  }
}

/* Convention: Attach mock function to fixture */
Fixture.mockFn = mockFn

export default Fixture
