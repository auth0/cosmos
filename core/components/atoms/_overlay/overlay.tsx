import * as React from 'react'
import ReactDOM from 'react-dom'
import styled from '@auth0/cosmos/styled'
import { spacing } from '@auth0/cosmos-tokens'

// TODO: create tokens?
const layers = {
  overlayBackdrop: 20,
  overlay: 30
}

const keyCodes = {
  escape: 27
}

export type OverlaySize = 'small' | 'medium' | 'large'
export const overlayContentSizes = {
  small: '480px',
  medium: '640px',
  large: '800px'
}

export interface IOverlayProps {
  closeOnBackdropClick?: boolean
  closeOnEscape?: boolean
  open?: boolean
  onClose: Function
  contentSize?: number | OverlaySize
}

interface IOverlayState {
  hasBeenMounted: boolean
}

class Overlay extends React.Component<IOverlayProps, IOverlayState> {
  static defaultProps = {
    closeOnBackdropClick: true,
    closeOnEscape: true,
    open: false
  }

  static Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: ${layers.overlayBackdrop};
    background: hsla(0, 12%, 95%, 0.95);
    display: flex;
    justify-content: center;
  `

  static Element = styled.div`
    width: 100%;
    margin: ${spacing.xlarge} ${spacing.small};
    pointer-events: none;
    display: inline-block;

    /* Since the focus trap is adding divs around the dialog box, the max width prop should be here */
    max-width: ${props => Overlay.getSizeForOverlay(props.contentSize)};
  `

  mountElement: HTMLDivElement
  contentElement: HTMLDivElement

  constructor(props) {
    super(props)
    this.state = { hasBeenMounted: false }
    this.mountElement = document.createElement('div')
  }

  static getSizeForOverlay(propValue) {
    if (typeof propValue === 'number') return `${propValue}px`

    return overlayContentSizes[propValue]
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
    const { open, children, contentSize } = this.props

    if (!this.state.hasBeenMounted) return null

    let content = open ? (
      <Overlay.Backdrop onMouseDown={this.handleMouseDown}>
        <Overlay.Element contentSize={contentSize} innerRef={el => (this.contentElement = el)}>
          {children}
        </Overlay.Element>
      </Overlay.Backdrop>
    ) : null

    return ReactDOM.createPortal(content, this.mountElement)
  }
}

export default Overlay
