import React from 'react'
import { TextInput } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return <TextInput id="custom-id" placeholder="Placeholder text" type="text" />
  }
}

export default Fixture
