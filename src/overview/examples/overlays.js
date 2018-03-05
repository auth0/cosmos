import React from 'react'
import styled from 'styled-components'

import Example from '../ov-components/example'
import Stack from '../ov-components/stack'
import { Button, Overlay, Dialog } from 'auth0-cosmos'
import { colors, spacing } from 'auth0-cosmos-tokens'

class OverlayExample extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOverlayOpen: false,
      isDialogOpen: false
    }
  }

  setIsOverlayOpen = isOverlayOpen => () => {
    this.setState((prevState, props) => ({ isOverlayOpen }))
  }

  setIsDialogOpen = isDialogOpen => () => {
    this.setState((prevState, props) => ({ isDialogOpen }))
  }

  render() {
    const { isOverlayOpen, isDialogOpen } = this.state
    const actions = [
      new Dialog.Action('OK', this.setIsDialogOpen(false), 'primary'),
      new Dialog.Action('Cancel', this.setIsDialogOpen(false))
    ]
    return (
      <Example title="Overlays and Dialogs" align="center">
        <Stack>
          <Button onClick={this.setIsOverlayOpen(true)}>Show Overlay</Button>
          <Button onClick={this.setIsDialogOpen(true)}>Show Dialog</Button>
        </Stack>

        <Overlay open={isOverlayOpen} onClose={this.setIsOverlayOpen(false)}>
          <ExampleOverlayContent>
            An <code>Overlay</code> is a low-level component that can contain any content.<br />
            To close an overlay, click anywhere outside of it, or press ESC.
          </ExampleOverlayContent>
        </Overlay>
        <Dialog
          title="Example Dialog"
          actions={actions}
          open={isDialogOpen}
          onClose={this.setIsDialogOpen(false)}
        >
          A <code>Dialog</code> builds on an <code>Overlay</code>, providing more styling and
          structure around what is displayed. It allows setting a fixed width, and adds a titlebar,
          close button, and a footer.
        </Dialog>
      </Example>
    )
  }
}

const ExampleOverlayContent = styled.div`
  padding: ${spacing.xlarge};
  background: ${colors.base.white};
  width: 500px;
  text-align: center;
`

export default OverlayExample
