import React from 'react'
import { Dialog, Button, ButtonGroup } from '@auth0/cosmos'

const mockActionOnClick = jest.fn()
const mockOnClose = jest.fn()

class Fixture extends React.Component {
  render() {
    return (
      <Dialog id="custom-id" open={true} onClose={Fixture.onClose} composed>
        <Dialog.Header>Example Dialog</Dialog.Header>

        <Dialog.Body>Are you sure?</Dialog.Body>

        <Dialog.Footer>
          <Button appearance="primary" onClick={Fixture.actionOnClick}>
            OK
          </Button>
          <Button appearance="secondary" onClick={Fixture.actionOnClick}>
            Cancel
          </Button>
        </Dialog.Footer>
      </Dialog>
    )
  }
}

Fixture.actionOnClick = mockActionOnClick
Fixture.onClose = mockOnClose

export default Fixture
