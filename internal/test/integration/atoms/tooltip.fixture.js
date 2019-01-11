import React from 'react'
import { Tooltip } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Tooltip id="custom-id" content="Here is some text" position="top" onClick={mockFn}>
        Hover me
      </Tooltip>
    )
  }
}

export default Fixture
