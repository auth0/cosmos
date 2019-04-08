import * as React from 'react'
import { Button } from '@auth0/cosmos'

import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Button id="custom-id" onClick={mockFn}>
        Button
      </Button>
    )
  }
}

export default Fixture
