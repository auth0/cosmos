import React from 'react'
import { TextInput } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return <TextInput id="custom-id" placeholder="Placeholder text" type="text" onClick={mockFn} />
  }
}

export default Fixture
