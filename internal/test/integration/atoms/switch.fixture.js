import React from 'react'
import { Switch } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return <Switch id="custom-id" onToggle={mockFn} />
  }
}

export default Fixture
