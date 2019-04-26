import * as React from 'react'
import { Stack } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <Stack id="custom-id">
        <span>uno</span>
        <span>dos</span>
        <span>tres</span>
      </Stack>
    )
  }
}

export default Fixture
