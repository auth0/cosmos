import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { spacing, colors } from '../../tokens'

const StyledLink = styled.div`
  a {
    display: block;
    padding: ${spacing.small} ${spacing.xlarge};
    text-decoration: none;
    color: ${props => (props.disabled ? colors.grayMedium : colors.grayDark)};

    &:hover,
    &.selected {
      background: ${colors.white};
      color: ${props => (props.disabled ? null : colors.orange)};
      box-shadow: inset -1px 0px 1px 0px ${colors.grayLightest};
    }
  }
`

const Tag = styled.span`
  color: ${colors.grayMedium};
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
        {documentation ? null : <Tag>Not documented</Tag>}
        {implemented ? null : <Tag>Not implemented</Tag>}
      </NavLink>
    </StyledLink>
  )
}

export default Link
export { StyledLink }
