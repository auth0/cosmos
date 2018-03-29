import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Tag from '../docs-components/tag'
import { spacing, colors } from '@auth0/cosmos/tokens'

const StyledLink = styled.div`
  a {
    display: block;
    padding: 10px ${spacing.medium};
    padding-left: ${props => (props.isChild ? spacing.xlarge : spacing.medium)};
    text-decoration: none;
    font-size: 14px;
    color: ${props => (props.disabled ? colors.base.grayMedium : colors.base.grayDark)};
    cursor: ${props => (props.disabled ? 'default' : 'pointer')};

    &:hover {
      color: ${props => (props.disabled ? null : colors.text.default)};
    }
    &.selected {
      color: ${props => (props.disabled ? null : colors.link.default)};
    }
  }
`

const TagWrapper = styled.span`
  color: ${colors.base.grayMedium};
  float: right;
`

const Link = props => {
  const { displayName, documentation, implemented } = props.component
  const url = `/docs/${displayName}`

  return (
    <StyledLink disabled={!documentation} isChild={props.parent}>
      <NavLink
        to={url}
        key={displayName}
        activeClassName="selected"
        onClick={e => {
          /* disable link if documentation doesn't exist */
          if (!documentation) e.preventDefault()
        }}
      >
        {displayName}
        {documentation ? null : (
          <TagWrapper>
            <Tag text="Not documented" />
          </TagWrapper>
        )}
        {implemented ? null : (
          <TagWrapper>
            <Tag text="Not implemented" />
          </TagWrapper>
        )}
      </NavLink>
    </StyledLink>
  )
}

export default Link
export { StyledLink }
