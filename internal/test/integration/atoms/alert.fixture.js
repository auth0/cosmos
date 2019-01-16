import React from 'react'
import { Alert } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Alert id="custom-id" icon="notes" type="default" title="FYI!" onDismiss={Fixture.onDismiss}>
        Just a regular message
      </Alert>
    )
  }
}

Fixture.onDismiss = mockFn

export default Fixture
