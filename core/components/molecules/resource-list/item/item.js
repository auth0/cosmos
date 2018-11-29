import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, ButtonGroup, Link } from '@auth0/cosmos'
import Avatar, { StyledAvatar } from '@auth0/cosmos/atoms/avatar'
import { StyledTextAllCaps } from '@auth0/cosmos/atoms/text'
import { actionShapeWithRequiredIcon } from '@auth0/cosmos/_helpers/action-shape'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'
import { colors, spacing } from '@auth0/cosmos-tokens'
import Automation from '../../../_helpers/automation-attribute'
import { actionToButtonProps, buttonBuilder } from '../action-builder'
import { deprecate } from '../../../_helpers/custom-validations'

const StyledListItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small} ${spacing.xsmall};
  cursor: ${props => (props.onClick ? 'pointer' : 'inherit')};
  &:hover {
    background: ${colors.list.backgroundHover};
  }
`

const ListItemHeader = styled.div`
  flex-basis: 40%;
  flex-flow: row nowrap;
  flex-grow: 1;
  display: flex;
  align-items: center;
  ${StyledAvatar} {
    margin-right: ${spacing.small};
  }
`

const ListItemBody = styled.div`
  flex-basis: 40%;
  flex-flow: row nowrap;
  flex-grow: 1;
  display: flex;
  align-items: center;
`

const ListItemFooter = styled.div`
  flex-basis: 20%;
  flex-flow: row nowrap;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const ListItemSubtitle = styled(StyledTextAllCaps)`
  margin-top: ${spacing.xsmall};
  display: block;
`

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

  return React.cloneElement(action, { key })
}

/**
 * Maps each action to a button if applicable
 * @param {ResourceList.Item.Action[]} actions
 * @param {ResourceList.Item.Props} item
 */
const resolveActions = (actions, item) => actions.map(resolveAction.bind(this, item))

const ResourceListItem = props => {
  let image
  let title
  let subtitle
  let actions

  if (props.image) {
    // TODO: We might want a way to control the type of the avatar, but we don't
    // want to leak every prop from Avatar into the ResourceListItem...
    image = <Avatar type="resource" image={props.image} size="large" />
  } else if (props.icon) {
    image = <Avatar type="resource" icon={props.icon} size="large" />
  }

  if (props.title) {
    if (props.href) {
      title = <Link href={props.href}>{props.title}</Link>
    } else {
      title = props.title
    }
  }

  if (props.subtitle) {
    subtitle = <ListItemSubtitle>{props.subtitle}</ListItemSubtitle>
  }

  if (props.actions) {
    actions = <ButtonGroup align="right">{resolveActions(props.actions, props.item)}</ButtonGroup>
  }

  return (
    <StyledListItem
      onClick={props.onClick ? props.onClick : null}
      {...Automation('resource-list.item')}
    >
      <ListItemHeader>
        {image}
        <div>
          {title}
          {subtitle}
        </div>
      </ListItemHeader>
      <ListItemBody>{props.children}</ListItemBody>
      <ListItemFooter>{actions}</ListItemFooter>
    </StyledListItem>
  )
}

ResourceListItem.propTypes = {
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
      return deprecate(props, {
        name: 'actions',
        oldAPI: 'passing objects in actions',
        replacement: '<Button>'
      })
    }
  }
}

export default ResourceListItem
