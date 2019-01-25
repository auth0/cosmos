import React from 'react'
import { ButtonGroup, Button } from '@auth0/cosmos'

class Fixture extends React.Component {
  render() {
    return (
      <ButtonGroup id="custom-id">
        <Button icon="copy" id="custom-id" />
        <Button icon="delete" />
      </ButtonGroup>
    )
  }
}

export default Fixture
