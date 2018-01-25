import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

// TODO: create tokens?
const layers = {
  overlayBackdrop: 2,
  overlay: 3
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

  handleBackdropMouseDown = evt => {
    const { isOpen, onClose } = this.props
    if (isOpen && this.contentElement && !this.contentElement.contains(evt.target)) {
      onClose()
    }
  }

  handleDocumentKeyDown = evt => {
    const { closeOnEscape, isOpen, onClose } = this.props
    if (closeOnEscape && isOpen && evt.which === keyCodes.escape) {
      evt.preventDefault()
      onClose()
    }
  }

  render() {
    const { isOpen, children } = this.props

    if (!this.state.hasBeenMounted) return null

    let content = null
    if (isOpen) {
      content = (
        <Overlay.Backdrop onMouseDown={this.handleBackdropMouseDown}>
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
  closeOnEscape: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

Overlay.defaultProps = {
  closeOnEscape: true,
  isOpen: false
}

export default Overlay
