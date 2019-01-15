import React from 'react'
import { Dialog, Button } from '@auth0/cosmos'
import { mockFn } from '../helpers/event-handler'

class Fixture extends React.Component {
  render() {
    return (
      <Dialog
        id="custom-id"
        open={true}
        title="Example Dialog"
        onClose={mockFn}
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

Fixture.actionOnClick = mockFn

export default Fixture
