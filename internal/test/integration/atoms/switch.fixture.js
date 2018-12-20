import React from 'react'
import { Switch } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return <Switch id="custom-id" onToggle={value => console.log(value)} />
  }
}

export default Fixture
