import React from 'react'
import Example from '../components/example'
import Stack from '../components/stack'
import { Button, Dialog } from '@auth0/cosmos'

class DialogExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
  }

  setIsOpen = isOpen => () => {
    this.setState((prevState, props) => ({ isOpen }))
  }

  render() {
    const { isOpen } = this.state
    const actions = [
      new Dialog.Action('OK', this.setIsOpen(false), 'primary'),
      new Dialog.Action('Cancel', this.setIsOpen(false))
    ]
    return (
      <Example title="Dialogs" align="center">
        <Stack>
          <Button onClick={this.setIsOpen(true)}>Show Dialog</Button>
        </Stack>
        <Dialog
          title="Example Dialog"
          actions={actions}
          open={isOpen}
          onClose={this.setIsOpen(false)}
        >
          A <code>Dialog</code> opens a modal dialog in a layer above the existing UI. It can be
          used to involve the user temporarily in a different context; for example, you can use a
          Dialog to ask a user a question or confirm that they want to perform an action.
        </Dialog>
      </Example>
    )
  }
}

export default DialogExample
