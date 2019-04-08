import * as React from 'react'
import { Dialog, Button } from '@auth0/cosmos'

const mockActionOnClick = jest.fn()
const mockOnClose = jest.fn()

class Fixture extends React.Component {
  static actionOnClick = mockActionOnClick
  static onClose = mockOnClose

  render() {
    return (
      <Dialog
        id="custom-id"
        open={true}
        title="Example Dialog"
        onClose={Fixture.onClose}
        actions={[
          <Button appearance="primary" onClick={Fixture.actionOnClick}>
            OK
          </Button>,
          <Button appearance="secondary" onClick={Fixture.actionOnClick}>
            Cancel
          </Button>
        ]}
      >
        Are you sure?
      </Dialog>
    )
  }
}


export default Fixture
