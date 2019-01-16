import React from 'react'
import { Spinner } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return <Spinner id="custom-id" onClick={mockFn} />
  }
}

export default Fixture
