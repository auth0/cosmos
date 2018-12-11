import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/button'
import { BaseHeading } from '../../atoms/heading'
import ButtonGroup from '../../molecules/button-group'
import Overlay, { overlayContentSizes } from '../../atoms/_overlay'
import DialogAction from './dialog-action'
import { colors, fonts, spacing } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

import FocusTrap from 'react-focus-lock'
import containerStyles from '../../_helpers/container-styles'

const createButtonForAction = (action, index) => {
  // As we also support passing raw <Button> components
  // as actions, we only need to create buttons for actions
  // when the action is instance of DialogAction.
  if (!(action instanceof DialogAction)) {
    if (action.displayName !== Button.displayName) {
      throw new Error('Invalid action component passed to Dialog.')
    }

    /* Add index to the button component as a key prop */
    return React.cloneElement(action, { key: index })
  }

  const buttonProps = {
    onClick: action.handler,
    appearance: action.appearance
  }
  return (
    <Button key={index} {...buttonProps}>
      {action.label}
    </Button>
  )
}

const focusOnFormInput = ({ current }) => {
  const node = ReactDOM.findDOMNode(current)
  if (!node) return
  const form = node.querySelector('form')
  if (!form) return

  const firstInput = form.querySelector('input')
  if (!firstInput) return

  firstInput.focus()
}

/**
 * Used when you want to apply an attribute to the dialog
 * based on the role it has been applied.
 *
 * If the role of the dialog matches the required one,
 * it returns the prop object.
 *
 * Should be used with the spread operator on the dialog component.
 *
 * Example:
 *
 * {...getAccessibilityRole(props, 'required-role', {
 *    foo: 'bar'
 * })}
 *
 * @param {Dialog.Props} props
 * @param {string} requiredRole
 * @param {object} propObject
 */
const getAccessibilityRole = (props, requiredRole, propObject) =>
  props.role === requiredRole ? propObject : {}

class Dialog extends React.Component {
  constructor(props) {
    super(props)
    this.childrenRef = React.createRef()
  }

  componentDidMount() {
    if (this.props.role === 'form') {
      setImmediate(() => focusOnFormInput(this.childrenRef))
    }
  }

  render() {
    const props = this.props
    return (
      <Overlay contentSize={props.width} {...props}>
        <FocusTrap persistentFocus={false} onExit={props.onClose}>
          <DialogBox
            width={props.width}
            {...Automation('dialog')}
            {...getAccessibilityRole(props, 'destructive', {
              'aria-describedby': 'dialog-description'
            })}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
          >
            <DialogClose>
              <Button
                aria-label="Close"
                size="default"
                appearance="link"
                icon="close"
                onClick={props.onClose}
              />
            </DialogClose>

            {props.title && (
              <DialogHeader {...Automation('dialog.title')}>
                <DialogTitle element={props.titleElement} id="dialog-title">
                  {props.title}
                </DialogTitle>
              </DialogHeader>
            )}

            <DialogBody
              ref={this.childrenRef}
              id="dialog-description"
              {...Automation('dialog.body')}
            >
              {props.children}
            </DialogBody>

            {props.actions.length > 0 && (
              <DialogFooter {...Automation('dialog.footer')}>
                <ButtonGroup>{props.actions.map(createButtonForAction)}</ButtonGroup>
              </DialogFooter>
            )}
          </DialogBox>
        </FocusTrap>
      </Overlay>
    )
  }
}

const DialogBox = styled.div`
  ${containerStyles};
  pointer-events: auto;
  position: relative;
  max-height: calc(100vh - (${spacing.xlarge} * 2));
  display: flex;
  flex-direction: column;
  background-color: ${colors.base.white};
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
`

const DialogClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  /* Overwirtes the color of the icons */
  ${Button.Element} {
    &,
    i,
    svg,
    path {
      color: ${colors.base.black};
      fill: ${colors.base.black};
    }
  }
`

const DialogHeader = styled.header`
  position: relative;
  padding: ${spacing.small} ${spacing.large} ${spacing.xsmall} ${spacing.large};
  color: ${colors.text.default};
  word-break: break-word;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: center;
`

const DialogTitle = props => {
  const InternalTitle = styled(BaseHeading.withComponent(props.element))`
    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.size.default};
    margin: 0;
  `

  return <InternalTitle {...props} />
}

const DialogBody = styled.div`
  padding: ${spacing.small} ${spacing.medium} ${spacing.large} ${spacing.medium};
  flex: 1 1 auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  word-break: break-word;
  word-wrap: break-word;
  /* Clears the margin of the last item of the body */
  > * {
    margin-bottom: 0;
  }
`

const DialogFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: ${spacing.small};
  border-top: 1px solid ${colors.base.grayLight};
`

Dialog.Action = DialogAction
Dialog.Element = DialogBox
Dialog.propTypes = {
  /** Buttons that will be shown on the dialog's footer */
  actions: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.instanceOf(DialogAction), PropTypes.element])
  ),
  /** Dialog's header title */
  title: PropTypes.string,
  /** Dialog's header title heading element */
  titleElement: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4']),
  /** Dialog's container width */
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(Object.keys(overlayContentSizes))]),
  /* Callback triggered when the the dialog is closed by the user */
  onClose: PropTypes.func,
  /** Whether you're presenting a form or a destructive action */
  role: PropTypes.oneOf(['default', 'form', 'destructive'])
}

Dialog.defaultProps = {
  width: 'medium',
  role: 'default',
  actions: [],
  titleElement: 'h2'
}

export default Dialog
