import React from 'react'
import { Link } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Link id="custom-id" href="https://auth0.com">
        Click me!
      </Link>
    )
  }
}

export default Fixture
