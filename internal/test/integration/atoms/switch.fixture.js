import React from 'react'
import { Switch } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

const onToggle = jest.fn()

class Fixture extends React.Component {
  render() {
    return <Switch id="custom-id" onToggle={onToggle} onClick={mockFn} />
  }
}

Fixture.onToggle = onToggle

export default Fixture
