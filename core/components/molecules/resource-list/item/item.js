import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import { Button, ButtonGroup, Link } from '@auth0/cosmos'
import Avatar, { StyledAvatar } from '@auth0/cosmos/atoms/avatar'
import { StyledTextAllCaps } from '@auth0/cosmos/atoms/text'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'
import { colors, spacing } from '@auth0/cosmos-tokens'
import Automation from '../../../_helpers/automation-attribute'
import { actionToButtonProps, buttonBuilder } from '../action-builder'

/**
 * Builds the button from the action or
 * adds the key to the action if it's a raw button.
 * @param {ResourceList.Item.Props} item
 * @param {ResourceList.Item.Action} action
 * @param {number} key
 */
const resolveAction = (item, action, key) => {
  if (typeof action === 'object' && !React.isValidElement(action)) {
    return buttonBuilder(actionToButtonProps({ ...action, key }, item))
  }

  // Patch action's onClick handler to include the item
  const { onClick: handler } = action.props
  const onClick = evt => handler(evt, item)

  return React.cloneElement(action, { key, onClick })
}

/**
 * Maps each action to a button if applicable
 * @param {ResourceList.Item.Action[]} actions
 * @param {ResourceList.Item.Props} item
 */
const resolveActions = (actions, item) => actions.map(resolveAction.bind(this, item))

class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inSortingMode: false }
    this.dragHandler = React.createRef()
  }

  setNextSortingMode(willBeInSortingMode) {
    const wasInSortingMode = this.state.inSortingMode

    if (!wasInSortingMode && willBeInSortingMode) this.registerArrowEvents()
    else if (wasInSortingMode && !willBeInSortingMode) this.unRegisterArrowEvents()
    else return

    this.setState({ inSortingMode: willBeInSortingMode })
  }

  onArrowPressed(event) {
    const { index, accessibilityOnSortEnd } = this.props

    switch (event.key) {
      case 'ArrowUp':
        return accessibilityOnSortEnd({ oldIndex: index, newIndex: index - 1 })
      case 'ArrowDown':
        return accessibilityOnSortEnd({ oldIndex: index, newIndex: index + 1 })
      default:
        return
    }
  }

  registerArrowEvents() {
    document.addEventListener('keydown', this.onArrowPressed.bind(this))
  }

  unRegisterArrowEvents() {
    document.removeEventListener('keydown', this.onArrowPressed.bind(this))
  }

  renderSortingHandler() {
    if (this.props.reorderHandle) {
      const SortableHandler = this.props.reorderHandle

      return (
        <SortableHandler
          ref={this.dragHandler}
          onFocusStatusChange={({ onFocus }) => this.setNextSortingMode(onFocus)}
        />
      )
    }

    return null
  }

  renderImage() {
    if (this.props.image) {
      // TODO: We might want a way to control the type of the avatar, but we don't
      // want to leak every prop from Avatar into the ListItem...
      return <Avatar type="resource" image={this.props.image} size="large" />
    } else if (this.props.icon) {
      return <Avatar type="resource" icon={this.props.icon} size="large" />
    }

    return null
  }

  renderTitle() {
    if (this.props.title) {
      if (this.props.href) {
        return <Link href={this.props.href}>{this.props.title}</Link>
      } else {
        return this.props.title
      }
    }

    return null
  }

  renderSubtitle() {
    return this.props.subtitle ? <ListItem.Subtitle>{this.props.subtitle}</ListItem.Subtitle> : null
  }

  renderActions() {
    return this.props.actions ? (
      <ButtonGroup align="right">{resolveActions(this.props.actions, this.props.item)}</ButtonGroup>
    ) : null
  }

  render() {
    const props = this.props
    const callHandler = handler => evt => handler(evt, props.item)

    return (
      <ListItem.Element
        inSortingMode={this.state.inSortingMode}
        onClick={props.onClick ? callHandler(props.onClick) : null}
        {...Automation('resource-list.item')}
      >
        {this.renderSortingHandler()}
        <ListItem.Header>
          {this.renderImage()}
          <div>
            {this.renderTitle()}
            {this.renderSubtitle()}
          </div>
        </ListItem.Header>
        <ListItem.Body>{props.children}</ListItem.Body>
        <ListItem.Footer>{this.renderActions()}</ListItem.Footer>
      </ListItem.Element>
    )
  }
}

ListItem.Element = styled.li`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small} ${spacing.xsmall};
  cursor: ${props => (props.onClick ? 'pointer' : 'inherit')};
  outline: ${props =>
    props.inSortingMode
      ? `
          thick solid ${colors.input.borderFocus}
        `
      : `none`};

  &:hover {
    background: ${colors.list.backgroundHover};
  }

  &.cosmos-dragging {
    background-color: ${colors.base.white};
    opacity: 0.9;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  }
`

ListItem.Header = styled.div`
  flex-basis: 40%;
  flex-flow: row nowrap;
  flex-grow: 1;
  display: flex;
  align-items: center;
  ${StyledAvatar} {
    margin-right: ${spacing.small};
  }
`

ListItem.Body = styled.div`
  flex-basis: 40%;
  flex-flow: row nowrap;
  flex-grow: 1;
  display: flex;
  align-items: center;
`

ListItem.Footer = styled.div`
  flex-basis: 20%;
  flex-flow: row nowrap;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

ListItem.Subtitle = styled(StyledTextAllCaps)`
  margin-top: ${spacing.xsmall};
  display: block;
`

ListItem.propTypes = {
  /** The main text for the list item. */
  title: PropTypes.string,
  /** The secondary line of text for the list item. */
  subtitle: PropTypes.string,
  /** If specified, the main text will be rendered as a hyperlink with this as the target. */
  href: PropTypes.string,
  /** An image URL to display as a thumbnail image for the list item. */
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /** An icon to display as a thumbnail image for the list item. */
  icon: PropTypes.oneOf(__ICONNAMES__),
  /** A function that will be called when the list item is clicked. */
  onClick: PropTypes.func,
  /** The actions to display for the list item. */
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(actionShapeWithRequiredIcon)
  ]),
  _actions: props => {
    if (!props.actions) return

    /* validation first action should be enough */
    const firstAction = props.actions[0]

    if (!React.isValidElement(firstAction)) {
      // See: https://github.com/auth0/cosmos/issues/1133
      // See: https://github.com/auth0/cosmos/issues/1222
      console.warn(
        'Passing objects in actions is deprecated and will be removed in Cosmos 1.0.' +
          ' See https://github.com/auth0/cosmos/pull/1133 for more information.'
      )
    }
  }
}

export default ListItem
