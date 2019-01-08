import React from 'react'
import { Badge } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Badge appearance="default" id="custom-id" onClick={mockFn}>
        99
      </Badge>
    )
  }
}

export default Fixture
