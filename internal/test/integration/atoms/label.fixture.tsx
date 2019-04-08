import * as React from 'react'
import { Label } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Label id="custom-id" onClick={mockFn}>
        Label Text
      </Label>
    )
  }
}

export default Fixture
