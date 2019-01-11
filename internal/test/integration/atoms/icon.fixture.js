import React from 'react'
import { Icon } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return <Icon name="delete" id="custom-id" onClick={mockFn} />
  }
}

export default Fixture
