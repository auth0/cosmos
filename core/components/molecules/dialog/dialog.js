import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/button'
import ButtonGroup from '../../molecules/button-group'
import Tabs from '../../molecules/tabs'
import Overlay from '../../atoms/_overlay'
import DialogAction from './dialog-action'
import { colors, fonts, spacing } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

import FocusTrap from 'react-focus-trap'

const dialogSizes = {
  small: '480px',
  medium: '640px',
  large: '800px'
}

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

const getSizeForDialog = propValue => {
  if (typeof propValue === 'number') return `${propValue}px`

  return dialogSizes[propValue]
}

const Dialog = props => (
  <Overlay {...props}>
    <FocusTrap active={props.open} onExit={props.onClose}>
      <DialogBox
        width={props.width}
        {...Automation('dialog')}
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"

        // 1- Add focus trap
        //
        // 2- Dialog types:
        // - Default: focus goes to the main action

        // - flag Irreversibel (aka destructive):
        //   - focus goes to close button
        //   - add `aria-describedby="dialog-description"`

        // - With forms: focus goes to the first focusable form element (for example an input)

        // 3- Esc - close the dialog

        // 4- sizes ?

        // sm 480px
        // default 640px
        // lg 800px

        // 5- what happens if it has no footer or header?
      >
        <DialogClose>
          <Button
            aria-label="Close"
            size="default"
            appearance="action"
            icon="close"
            onClick={props.onClose}
          />
        </DialogClose>

        {props.title && (
          <DialogHeader {...Automation('dialog.title')}>
            <DialogTitle id="dialog-title">{props.title}</DialogTitle>
          </DialogHeader>
        )}

        <DialogBody id="dialog-description" {...Automation('dialog.body')}>
          {props.children}
        </DialogBody>

        {props.actions && (
          <DialogFooter {...Automation('dialog.footer')}>
            <ButtonGroup>{props.actions.map(createButtonForAction)}</ButtonGroup>
          </DialogFooter>
        )}
      </DialogBox>
    </FocusTrap>
  </Overlay>
)

const DialogBox = styled.div`
  position: relative;

  /* Max width makes it responsive, no need for media queries */
  /* min-width: ${props => props.width}px; */
  max-width: ${props =>
    console.log({ ahre: getSizeForDialog(props.width) }) || getSizeForDialog(props.width)};
  max-height: calc(100vh - ${spacing.xlarge});
  margin-right: ${spacing.small};
  margin-left: ${spacing.small};
  display: flex;
  flex-direction: column;
  background-color: ${colors.base.white};
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`

const DialogClose = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`

const DialogHeader = styled.header`
  position: relative;
  padding: ${spacing.small} ${spacing.large} ${spacing.xsmall} ${spacing.large};
  color: ${colors.text.default};
  word-break: break-word;

  /* Making the text center on the header is very opiniated */
  text-align: center;

  /* Creates a small fade for the scrolling body */
  ::after {
    content: '';
    position: absolute;
    bottom: -${spacing.large};
    left: 0;
    width: 100%;
    height: ${spacing.large};
    background-image: linear-gradient(to bottom, white, transparent);
  }
`

// The author should be able to change the header level
const DialogTitle = styled.h1`
  font-weight: ${fonts.weight.medium};
`

const DialogBody = styled.div`
  padding: ${spacing.small} ${spacing.medium} ${spacing.large} ${spacing.medium};
  flex: 1 1 auto;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  word-break: break-word;

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
  actions: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.instanceOf(DialogAction), PropTypes.element])
  ),
  title: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(Object.keys(dialogSizes))]),
  onClose: PropTypes.func
}

Dialog.defaultProps = {
  width: 'medium'
}

export default Dialog
