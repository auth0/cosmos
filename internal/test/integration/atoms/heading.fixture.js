import React from 'react'
import { Heading } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Heading size={1} id="custom-id" onClick={mockFn}>
        Big whoop
      </Heading>
    )
  }
}

export default Fixture
