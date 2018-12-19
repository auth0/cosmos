import React from 'react'
import { Badge } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Badge appearance="default" id={this.props.id}>
        99
      </Badge>
    )
  }
}

export default Fixture
