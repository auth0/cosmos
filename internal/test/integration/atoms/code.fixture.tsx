import * as React from 'react'
import { Code } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Code id="custom-id" onClick={mockFn}>
        let me = 'be'
      </Code>
    )
  }
}

export default Fixture
