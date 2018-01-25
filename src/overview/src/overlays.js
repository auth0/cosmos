import React from 'react'
import styled from 'styled-components'
import Container from './container'
import { Button, Overlay, Dialog } from '../../components'
import { colors, spacing } from '../../tokens'

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
    return (
      <Container title="Overlays and Dialogs">
        <Button onClick={this.setIsOverlayOpen(true)}>Show Overlay</Button>
        <Button onClick={this.setIsDialogOpen(true)}>Show Dialog</Button>
        <Overlay isOpen={isOverlayOpen} onClose={this.setIsOverlayOpen(false)}>
          <ExampleOverlayContent>
            An <code>Overlay</code> is a low-level component that can contain any content.<br />
            To close an overlay, click anywhere outside of it, or press ESC.
          </ExampleOverlayContent>
        </Overlay>
        <Dialog title="Example Dialog" isOpen={isDialogOpen} onClose={this.setIsDialogOpen(false)}>
          <Dialog.Body>
            A <code>Dialog</code> builds on an <code>Overlay</code>, providing more styling and
            structure around what is displayed. It allows setting a fixed width, and adds a
            titlebar, close button, and a footer.
          </Dialog.Body>
          <Dialog.Footer>
            <Button primary onClick={this.setIsDialogOpen(false)}>
              OK
            </Button>
            <Button onClick={this.setIsDialogOpen(false)}>Cancel</Button>
          </Dialog.Footer>
        </Dialog>
      </Container>
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
