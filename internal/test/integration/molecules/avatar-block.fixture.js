import React from 'react'
import { AvatarBlock } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <AvatarBlock
        id="custom-id"
        type="user"
        image="https://twitter-avatar.now.sh/TessaViolet"
        title="Tessa Violet"
        onClick={mockFn}
      />
    )
  }
}

export default Fixture
