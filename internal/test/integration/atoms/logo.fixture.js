import React from 'react'
import { Logo } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return <Logo id="custom-id" onClick={mockFn} />
  }
}

export default Fixture
