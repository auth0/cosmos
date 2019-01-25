import React from 'react'
import { ButtonGroup, Button } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <ButtonGroup id="custom-id" onClick={mockFn}>
        <Button icon="copy" id="custom-id" />
        <Button icon="delete" />
      </ButtonGroup>
    )
  }
}

export default Fixture
