import * as React from 'react'
import { Paragraph } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Paragraph id="custom-id" onClick={mockFn}>
        Long text here
      </Paragraph>
    )
  }
}

export default Fixture
