import React from 'react'
import { TextArea } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return <TextArea id="custom-id" placeholder="Placeholder text" onClick={mockFn} />
  }
}

export default Fixture
