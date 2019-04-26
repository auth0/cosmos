import * as React from 'react'
import * as ReactDOM from 'react-dom'
import styled from '../../styled'
import Button from '../../atoms/button'
import { BaseHeading } from '../../atoms/heading'
import ButtonGroup from '../../molecules/button-group'
import Tabs from '../../molecules/tabs'
import Overlay, { OverlaySize } from '../../atoms/_overlay'
import DialogAction from './dialog-action'
import { colors, fonts, spacing } from '../../tokens'
import Automation from '../../_helpers/automation-attribute'

import FocusTrap from 'react-focus-lock'
import containerStyles from '../../_helpers/container-styles'
import { rootProps } from '../../_helpers/root-props'

const createButtonForAction = (action: DialogAction | JSX.Element, index) => {
  // As we also support passing raw <Button> components
  // as actions, we only need to create buttons for actions
  // when the action is instance of DialogAction.
  if (!(action instanceof DialogAction)) {
    if (action.type !== Button) {
      throw new Error('Invalid action component passed to Dialog.')
    }

    /* Add index to the button component as a key prop */
    return React.cloneElement(action, { key: index, ...Automation('dialog.action') })
  }

  const buttonProps = {
    onClick: action.handler,
    appearance: action.appearance
  }
  return (
    <Button key={index} {...buttonProps} {...Automation('dialog.action')}>
      {action.label}
    </Button>
  )
}

const focusOnFormInput = ({ current }) => {
  const node = ReactDOM.findDOMNode(current) as HTMLDivElement
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
  > *:last-child {
    margin-bottom: 0;
  }

  ${Tabs.TabList} {
    margin-top: -${spacing.small};
    margin-left: -${spacing.medium};
    margin-right: -${spacing.medium};
    padding-left: ${spacing.medium};
    padding-right: ${spacing.medium};
    justify-content: center;
  }
`

const DialogFooter = styled.footer`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: ${spacing.small};
  border-top: 1px solid ${colors.base.grayLight};
`

export type DialogActionOrElement = DialogAction | React.ReactNode

export interface IDialogProps {
  /** HTML ID of the component */
  id?: string
  /** Buttons that will be shown on the dialog's footer */
  actions?: DialogActionOrElement[]
  /** Dialog's header title */
  title?: string
  /** Dialog's header title heading element */
  titleElement?: 'h1' | 'h2' | 'h3' | 'h4'
  /** Dialog's container width */
  width?: OverlaySize | number
  /* Callback triggered when the the dialog is closed by the user */
  onClose?: Function
  /** Whether you're presenting a form or a destructive action */
  role?: 'default' | 'form' | 'destructive'
  open?: boolean
}

class Dialog extends React.Component<IDialogProps> {
  static Action = DialogAction
  static Element = DialogBox

  static defaultProps = {
    width: 'medium',
    role: 'default',
    actions: [],
    titleElement: 'h2'
  }

  childrenRef = React.createRef<HTMLDivElement>()

  componentDidMount() {
    if (this.props.role === 'form') {
      setImmediate(() => focusOnFormInput(this.childrenRef))
    }
  }

  render() {
    const props = this.props
    return (
      <Overlay contentSize={props.width} {...props}>
        <FocusTrap persistentFocus={false}>
          <DialogBox
            width={props.width}
            {...Automation('dialog')}
            {...getAccessibilityRole(props, 'destructive', {
              'aria-describedby': 'dialog-description'
            })}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            {...rootProps(props)}
          >
            <DialogClose>
              <Button
                aria-label="Close"
                size="default"
                appearance="link"
                icon="close"
                onClick={props.onClose}
                {...Automation('dialog.close')}
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

            {props.actions && props.actions.length > 0 && (
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

export default Dialog
