import React from 'react'
import { Dialog, Button } from '@auth0/cosmos'

class Fixture extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: true }
  }
  setDialogState(open) {
    this.setState({ open })
  }

  render() {
    return (
      <div>
        <Dialog
          id="custom-id"
          open={this.state.open}
          title="Example Dialog"
          onClose={() => this.setDialogState(false)}
          actions={[
            <Button
              appearance="primary"
              onClick={() => {
                alert("You've performed the 'OK' action.")
              }}
            >
              OK
            </Button>,
            <Button
              appearance="secondary"
              onClick={() => {
                alert("You've performed the 'Cancel' action.")
              }}
            >
              Cancel
            </Button>
          ]}
        >
          Are you sure?
        </Dialog>
      </div>
    )
  }
}

export default Fixture
