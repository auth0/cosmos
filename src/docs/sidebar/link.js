import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

import { spacing, colors } from '../../tokens'

const StyledLink = styled.div`
  a {
    display: block;
    padding: ${spacing.small} ${spacing.xlarge};
    text-decoration: none;
    color: ${colors.grayDark};

    &:hover,
    &.selected {
      background: ${colors.white};
      color: ${colors.orange};
      box-shadow: inset -1px 0px 1px 0px ${colors.grayLightest};
    }
  }
`

const Link = props => {
  let { displayName } = props.component
  return (
    <StyledLink>
      <NavLink to={`/docs/${displayName}`} key={displayName} activeClassName="selected">
        {displayName}
      </NavLink>
    </StyledLink>
  )
}

export default Link
export { StyledLink }
