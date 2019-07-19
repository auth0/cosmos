import * as React from 'react'
import styled, { css } from '../../../styled'
import { ButtonGroup, Link } from '../../../'
import Avatar, { StyledAvatar } from '../../../atoms/avatar'
import { StyledTextAllCaps } from '../../../atoms/text'
import { ActionWithIcon } from '../../../_helpers/action-shape'
import { __ICONNAMES__ } from '../../../atoms/icon'
import { colors, spacing } from '../../../tokens'
import Automation from '../../../_helpers/automation-attribute'
import { actionToButtonProps, buttonBuilder } from '../action-builder'

const itemFocusOutline = '2px'

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
  const onClick = (evt) => {
    evt.stopPropagation()
    handler(evt, item)
  }

  return React.cloneElement(action, { key, onClick })
}

/**
 * Maps each action to a button if applicable
 * @param {ResourceList.Item.Action[]} actions
 * @param {ResourceList.Item.Props} item
 */
const resolveActions = (actions: ResourceListItemAction[], item) =>
  actions.map(resolveAction.bind(this, item))

export type ResourceListItemAction = React.ReactNode | ActionWithIcon

export interface IListItemProps {
  /** The main text for the list item. */
  title?: string
  /** The secondary line of text for the list item. */
  subtitle?: string
  /** If specified the main text will be rendered as a hyperlink with this as the target. */
  href?: string
  /** An image URL to display as a thumbnail image for the list item. */
  image?: string | React.ReactNode
  /** An icon to display as a thumbnail image for the list item. */
  icon?: string
  /** Defines the flex-basis of the middle column. Accepts any number and unit, for example?: `40%` or `200px` */
  bodyWidth?: string
  /** A function that will be called when the list item is clicked. */
  onClick?: Function
  /** The actions to display for the list item. */
  actions?: ResourceListItemAction[]
  reorderHandle?: any
  draggingMode?: boolean
  item?: Object
}

class ListItem extends React.Component<IListItemProps> {
  public static Element = styled.li`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid ${colors.list.borderColor};
    padding: ${spacing.small} ${spacing.xsmall};
    cursor: ${(props) => (props.onClick ? 'pointer' : 'inherit')};

    &:hover {
      background: ${colors.list.backgroundHover};
    }

    &.cosmos-dragging {
      background-color: ${colors.base.white};
      opacity: 0.9;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
    }

    > *:not(:last-child) {
      margin-right: ${spacing.small};
    }

    /* Disable pointer events on non-dragging elements */
    /* to avoid unexpected hover behaviors. */
    ${(props) =>
      props.draggingMode
        ? css`
            &:not(.cosmos-dragging) {
              pointer-events: none;
            }
          `
        : ''};
  `

  public static Header = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    word-break: break-word;

    ${StyledAvatar} {
      /* This is a magic number */
      margin-right: 12px;
    }
  `

  public static Body = styled.div`
    flex: 1;
    flex-basis: ${(props) => props.bodyWidth};

    /* This is not mobile first, but it avoids negation of margin */
    @media screen and (max-width: 768px) {
      flex: 1 0 100%;
      order: 1;
      margin-top: ${spacing.small};
    }
  `

  public static Footer = styled.div``

  public static Subtitle = styled(StyledTextAllCaps)`
    margin-top: ${spacing.xxsmall};
    display: block;
  `

  public dragHandler = React.createRef()

  public renderSortingHandler() {
    if (this.props.reorderHandle) {
      const SortableHandler = this.props.reorderHandle

      return <SortableHandler ref={this.dragHandler} />
    }

    return null
  }

  public renderImage() {
    if (this.props.image) {
      // TODO: We might want a way to control the type of the avatar, but we don't
      // want to leak every prop from Avatar into the ListItem...
      return <Avatar type="resource" image={this.props.image} size="large" />
    } else if (this.props.icon) {
      return <Avatar type="resource" icon={this.props.icon} size="large" />
    }

    return null
  }

  public renderTitle() {
    if (this.props.title) {
      if (this.props.href) {
        return <Link href={this.props.href}>{this.props.title}</Link>
      } else {
        return this.props.title
      }
    }

    return null
  }

  public renderSubtitle() {
    return this.props.subtitle ? <ListItem.Subtitle>{this.props.subtitle}</ListItem.Subtitle> : null
  }

  public renderActions() {
    return this.props.actions ? (
      <ButtonGroup align="right">{resolveActions(this.props.actions, this.props.item)}</ButtonGroup>
    ) : null
  }

  public render() {
    const props = this.props
    const callHandler = (handler) => (evt) => handler(evt, props.item)
    return (
      <ListItem.Element
        {...props}
        draggingMode={props.draggingMode}
        onClick={props.onClick ? callHandler(props.onClick) : null}
        {...Automation('resource-list.item')}
        {...props}
      >
        {this.renderSortingHandler()}
        <ListItem.Header>
          {this.renderImage()}
          <div>
            {this.renderTitle()}
            {this.renderSubtitle()}
          </div>
        </ListItem.Header>
        {props.children && <ListItem.Body {...props}>{props.children}</ListItem.Body>}
        {props.actions && <ListItem.Footer>{this.renderActions()}</ListItem.Footer>}
      </ListItem.Element>
    )
  }
}

export default ListItem
