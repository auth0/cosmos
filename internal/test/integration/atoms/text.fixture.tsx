import * as React from 'react'
import { Text } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Text id="custom-id" type="allcaps" onClick={mockFn}>
        hey
      </Text>
    )
  }
}

export default Fixture
