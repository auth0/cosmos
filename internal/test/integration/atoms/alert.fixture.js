import React from 'react'
import { Alert } from '@auth0/cosmos'

import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Alert id="custom-id" icon="notes" type="default" title="FYI!" onDismiss={mockFn}>
        Just a regular message
      </Alert>
    )
  }
}

export default Fixture
