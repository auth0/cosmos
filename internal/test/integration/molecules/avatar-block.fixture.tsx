import * as React from 'react'
import { AvatarBlock } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <AvatarBlock
        id="custom-id"
        type="user"
        image="https://twitter-avatar.now.sh/TessaViolet"
        title="Tessa Violet"
      />
    )
  }
}

export default Fixture
