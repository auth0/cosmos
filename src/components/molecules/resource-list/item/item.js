import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Avatar, Button, ButtonGroup, Link, Thumbnail } from '@auth0/cosmos'
import { colors, spacing } from '@auth0/cosmos-tokens'
import { StyledTextAllCaps } from '@auth0/cosmos/atoms/text'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

const StyledListItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small} ${spacing.xsmall};
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
  span {
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

const ResourceListItem = props => {
  let image
  let title
  let subtitle
  let actions

  if (props.image) {
    if (props.image.type === Avatar) {
      image = props.image
    } else {
      image = <Thumbnail source={props.image} />
    }
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

  const handleActionClick = handler => evt => {
    handler(evt, props.item)
  }

  if (props.actions) {
    actions = (
      <ButtonGroup align="right">
        {props.actions.map((action, index) => (
          <Button
            key={index}
            icon={action.icon}
            onClick={handleActionClick(action.handler)}
            label={action.label}
          />
        ))}
      </ButtonGroup>
    )
  }

  return (
    <StyledListItem>
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
  /** An image URL, or an Icon, Image, or Avatar to display as a thumbnail image for the list item. */
  image: PropTypes.node,
  /** The actions to display for the list item. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
      handler: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    })
  )
}

export default ResourceListItem
