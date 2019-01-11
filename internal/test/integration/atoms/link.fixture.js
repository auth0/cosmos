import React from 'react'
import { Link } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Link id="custom-id" href="https://auth0.com" onClick={mockFn}>
        Click me!
      </Link>
    )
  }
}

export default Fixture
