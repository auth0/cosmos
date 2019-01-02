import React from 'react'
import { Tooltip } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Tooltip id="custom-id" content="This is the tooltip text" position="top">
        Hover me
      </Tooltip>
    )
  }
}

export default Fixture
