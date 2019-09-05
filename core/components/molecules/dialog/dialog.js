import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import Button from '../../atoms/button'
import { BaseHeading } from '../../atoms/heading'
import ButtonGroup from '../../molecules/button-group'
import Tabs from '../../molecules/tabs'
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

/**
 * Resolves the Dialog's Tabs currently selected index.
 *
 * @param {React.Element} children
 * @returns {number?}
 */
function getTabsSelectedIndex(children) {
  if (!children) return null

  const notNull = item => item !== null
  const allTabs = React.Children.map(
    children,
    child => (child.type === Tabs ? child : null)
  ).filter(notNull)

  if (allTabs.length < 1) return null
  const tab = allTabs[0]

  return tab.props.selected
}

/**
 * Returns a clone of the element with its
 * children transformed by the transformation function.
 *
 * @param {React.Element} element
 * @param {function} transformation
 * @returns {React.Element<{children: any[]}, HTMLElement>}
 */
function overrideChildren(element, transformation) {
  const children = React.Children.map(element.props.children, transformation)
  return React.cloneElement(element, { children: children })
}

/**
 * Applies the 'dialog.action` automation attribute to each
 * action on a Dialog's Footer.
 * @param {React.Element} footer
 */
function applyAutomationAttributeToActions(footer) {
  const actions = React.Children.map(footer.props.children, action =>
    withAutomationAttribute('dialog.action', action)
  )
  const wrappedActions = <ButtonGroup children={actions} />
  const enhancedFooter = React.cloneElement(footer, { children: wrappedActions })

  return enhancedFooter
}

/**
 * Extracts any Dialog.Footer instance from the
 * dialog body and returns them depending on the currently
 * selected tab element index.
 *
 * @param {React.Element} children
 * @param {number} selectedTab
 * @returns {{footer: React.Element[], tabs: React.Element}}
 */
function renderTabsChildren(children, selectedTab) {
  let footers = []
  let headers = []

  const tabs = overrideChildren(children, tabs =>
    overrideChildren(tabs, tabsElement => {
      if (tabsElement.type === Dialog.Header) {
        headers.push(tabsElement)
        return
      }

      if (tabsElement.type === Dialog.Footer) {
        footers.push(tabsElement)
        return
      }

      return tabsElement
    })
  )

  const header = headers[selectedTab]
  const rawFooter = footers[selectedTab]
  const footer = rawFooter ? applyAutomationAttributeToActions(rawFooter) : rawFooter

  return { tabs, header, footer }
}

/**
 * Maps the actions coming to the dialog as a prop
 * to a proper DialogFooter button group.
 *
 * @param {Array<React.Element>} actionsProp
 * @returns {React.Element}
 */
function renderActionsFromProp(actionsProp) {
  if (actionsProp.length < 1) return null

  return (
    <Dialog.Footer {...Automation('dialog.footer')}>
      <ButtonGroup>{actionsProp.map(createButtonForAction)}</ButtonGroup>
    </Dialog.Footer>
  )
}

/**
 * Applies an automation attribute to an React element.
 * @param {string} attributeValue
 * @param {React.Element} element
 */
function withAutomationAttribute(attributeValue, element) {
  return React.cloneElement(element, { ...Automation(attributeValue) })
}

/**
 * Enhance children components by adding automation
 * attributes to each matching children.
 *
 * @param children
 * @returns {React.Element[]}
 */
function enhanceComposedChildren(children) {
  return React.Children.map(children, child => {
    switch (child.type) {
      case Dialog.Header:
        return withAutomationAttribute('dialog.title', child)
      case Dialog.Body:
        return withAutomationAttribute('dialog.body', child)
      case Dialog.Footer:
        return withAutomationAttribute('dialog.footer', applyAutomationAttributeToActions(child))
      default:
        return child
    }
  })
}

/**
 * Renders the dialog content enhancing its children if using
 * composed mode.
 *
 * @param {object} props
 * @param {React.Element} children
 * @param {React.Element} tabsFooter
 * @returns {React.Element[]}
 */
function renderDialogContent(props, children, tabsElements) {
  if (props.composed) return enhanceComposedChildren(props.children)

  return (
    <React.Fragment>
      {tabsElements.tabsHeader}

      <Dialog.Body ref={this.childrenRef} id="dialog-description" {...Automation('dialog.body')}>
        {children}
      </Dialog.Body>

      {tabsElements.tabsFooter}

      {renderActionsFromProp(props.actions)}
    </React.Fragment>
  )
}

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
    let { children } = props
    let tabsFooter, tabsHeader

    const selectedTab = getTabsSelectedIndex(props.children)

    // explicit check for null since selectedTab can be 0
    const childrenIsTab = selectedTab !== null

    if (childrenIsTab) {
      const compoundChildren = renderTabsChildren(props.children, selectedTab)
      children = compoundChildren.tabs
      tabsFooter = compoundChildren.footer
      tabsHeader = compoundChildren.header
    }

    return (
      <Overlay contentSize={props.width} {...props}>
        <FocusTrap persistentFocus={false} onExit={props.onClose}>
          <Dialog.Box
            width={props.width}
            {...Automation('dialog')}
            {...getAccessibilityRole(props, 'destructive', {
              'aria-describedby': 'dialog-description'
            })}
            role="dialog"
            aria-modal="true"
            aria-labelledby="dialog-title"
            {...props}
          >
            <Dialog.Close>
              <Button
                aria-label="Close"
                size="default"
                appearance="link"
                icon="close"
                onClick={props.onClose}
                {...Automation('dialog.close')}
              />
            </Dialog.Close>

            {props.title && (
              <Dialog.Header {...Automation('dialog.title')}>
                <Dialog.Title element={props.titleElement} id="dialog-title">
                  {props.title}
                </Dialog.Title>
              </Dialog.Header>
            )}

            {renderDialogContent.bind(this)(props, children, { tabsHeader, tabsFooter })}
          </Dialog.Box>
        </FocusTrap>
      </Overlay>
    )
  }
}

Dialog.Box = styled.div`
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

Dialog.Close = styled.div`
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

Dialog.Header = styled.header`
  position: relative;
  padding: ${spacing.small} ${spacing.large} ${spacing.xsmall} ${spacing.large};
  color: ${colors.text.default};
  word-break: break-word;
  white-space: pre-wrap;
  word-wrap: break-word;
  text-align: center;
`

Dialog.Title = props => {
  const InternalTitle = styled(BaseHeading.withComponent(props.element))`
    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.size.default};
    margin: 0;
  `

  return <InternalTitle {...props} />
}

Dialog.Title.propTypes = {
  element: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4'])
}

Dialog.Title.defaultProps = {
  element: 'h2'
}

Dialog.Body = styled.div`
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

Dialog.Footer = styled.footer`
  display: flex;
  flex: 0 0 auto;
  justify-content: center;
  padding: ${spacing.small};
  border-top: 1px solid ${colors.base.grayLight};
`

Dialog.Action = DialogAction
Dialog.Element = Dialog.Box
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
  role: PropTypes.oneOf(['default', 'form', 'destructive']),
  /** Tells the dialog to not enforce its internal stucture. You provide the header, footer and body */
  composed: PropTypes.bool
}

Dialog.defaultProps = {
  width: 'medium',
  role: 'default',
  actions: [],
  composed: false
}

export default Dialog
