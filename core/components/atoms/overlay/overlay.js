import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// TODO: create tokens?
const layers = {
  overlayBackdrop: 20,
  overlay: 30
}

const keyCodes = {
  escape: 27
}

class Overlay extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasBeenMounted: false }
    this.mountElement = document.createElement('div')
    this.contentElement = null
  }

  componentDidMount() {
    document.body.appendChild(this.mountElement)
    document.addEventListener('keydown', this.handleDocumentKeyDown)
    this.setState((prevState, props) => ({
      hasBeenMounted: true
    }))
  }

  componentWillUnmount() {
    document.body.removeChild(this.mountElement)
    document.removeEventListener('keydown', this.handleDocumentKeyDown)
  }

  handleMouseDown = evt => {
    const { closeOnBackdropClick, open, onClose } = this.props
    const clickWasOnBackdrop = this.contentElement && !this.contentElement.contains(evt.target)
    if (open && closeOnBackdropClick && clickWasOnBackdrop) {
      onClose()
    }
  }

  handleDocumentKeyDown = evt => {
    const { closeOnEscape, open, onClose } = this.props
    const escapeWasPressed = evt.which === keyCodes.escape
    if (open && closeOnEscape && escapeWasPressed) {
      evt.preventDefault()
      onClose()
    }
  }

  render() {
    const { open, children } = this.props

    if (!this.state.hasBeenMounted) return null

    let content = null
    if (open) {
      content = (
        <Overlay.Backdrop onMouseDown={this.handleMouseDown}>
          <Overlay.Element innerRef={el => (this.contentElement = el)}>{children}</Overlay.Element>
        </Overlay.Backdrop>
      )
    }

    return ReactDOM.createPortal(content, this.mountElement)
  }
}

Overlay.Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${layers.overlayBackdrop};
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`

Overlay.Element = styled.div`
  flex: none;
  z-index: ${layers.overlay};
`

Overlay.propTypes = {
  closeOnBackdropClick: PropTypes.bool.isRequired,
  closeOnEscape: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired
}

Overlay.defaultProps = {
  closeOnBackdropClick: true,
  closeOnEscape: true,
  open: false
}

export default Overlay
