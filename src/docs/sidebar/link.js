import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import Tag from '../docs-components/tag'
import { spacing, colors } from '../../tokens'

const StyledLink = styled.div`
  a {
    display: block;
    padding: 10px ${spacing.medium};
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
  let { displayName, documentation, implemented } = props.component
  return (
    <StyledLink disabled={!documentation}>
      <NavLink
        to={`/docs/${displayName}`}
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
