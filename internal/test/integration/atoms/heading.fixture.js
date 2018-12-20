import React from 'react'
import { Heading } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Heading size={1} id="custom-id">
        Big whoop
      </Heading>
    )
  }
}

export default Fixture
