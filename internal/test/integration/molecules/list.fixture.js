import React from 'react'
import { List } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <List id="custom-id">
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </List>
    )
  }
}

export default Fixture
