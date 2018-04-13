import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Button, Link, ButtonGroup, Thumbnail } from '@auth0/cosmos'
import { colors, spacing } from '@auth0/cosmos-tokens'
import { StyledTextAllCaps } from '@auth0/cosmos/atoms/text'

const StyledListItem = styled.li`
  display: flex;
  border-top: 1px solid ${colors.list.borderColor};
  padding: ${spacing.small} ${spacing.xsmall};
  &:hover {
    background: ${colors.list.backgroundHover};
  }
`

const ListItemHeader = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-right: ${spacing.small};
  }
`

const ListItemFooter = styled.div`
  display: flex;
`

const ListItemBody = styled.div`
  flex: 1;
  padding: 0 ${spacing.large};
  display: flex;
  align-items: center;
`

const ListItemSubtitle = styled(StyledTextAllCaps)`
  margin-top: ${spacing.xsmall};
  display: block;
`

const ResourceListItem = props => {
  let thumbnail
  let title
  let subtitle
  let actions

  if (props.thumbnail) {
    thumbnail = <Thumbnail source={props.thumbnail} />
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
    handler(evt, props._item)
  }

  if (props.actions) {
    actions = (
      <ButtonGroup align="right">
        {props.actions.map((action, index) => (
          <Button
            key={index}
            icon={action.icon}
            onClick={handleActionClick(action.method)}
            label={action.label}
          />
        ))}
      </ButtonGroup>
    )
  }

  return (
    <StyledListItem>
      <ListItemHeader>
        {thumbnail}
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
  /** An Icon or Image to display as a thumbnail for the list item. */
  thumbnail: PropTypes.string,
  /** The actions to display for the list item. */
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      method: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    })
  )
}

export default ResourceListItem
