import React from 'react'
import { Alert } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Alert id="custom-id" icon="notes" type="default" title="FYI!">
        Just a regular message
      </Alert>
    )
  }
}

export default Fixture
