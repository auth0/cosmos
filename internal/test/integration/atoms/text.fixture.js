import React from 'react'
import { Text } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Text id="custom-id" type="allcaps">
        hey
      </Text>
    )
  }
}

export default Fixture
