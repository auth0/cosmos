import React from 'react'
import { Checkbox } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Checkbox name="example" value="one" id="custom-id">
        You can check me
      </Checkbox>
    )
  }
}

export default Fixture
