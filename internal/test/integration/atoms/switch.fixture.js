import React from 'react'
import { Switch } from '@auth0/cosmos'

const customToggle = jest.fn()

class Fixture extends React.Component {
  render() {
    return <Switch id="custom-id" onToggle={customToggle} />
  }
}

Fixture.customToggle = customToggle

export default Fixture
