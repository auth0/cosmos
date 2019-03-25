import * as React from 'react'
import { Tooltip, TextInput } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  static onClick = mockFn

  render() {
    return (
      <Tooltip id="custom-id" content="This is the tooltip text" position="top" onClick={mockFn}>
        <TextInput placeholder="Enter something" />
      </Tooltip>
    )
  }
}

export default Fixture
