import React from 'react'
import { Checkbox } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Checkbox name="example" value="one" id="custom-id" onChange={mockFn}>
        You can check me
      </Checkbox>
    )
  }
}

export default Fixture
