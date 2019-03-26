import React from "react"
import styled from "styled-components"
import { Link as NavLink } from "gatsby"
import kebabCase from "lodash.kebabcase"
import startCase from "lodash.startcase"

import { Tag } from "../docs-components"
import { spacing, colors } from "@auth0/cosmos/tokens"

const StyledLink = styled.div`
  a {
    display: block;
    padding: 10px ${spacing.medium};
    padding-left: ${props => (props.isChild ? spacing.xlarge : spacing.medium)};
    text-decoration: none;
    font-size: 14px;
    color: ${props =>
      props.disabled ? colors.base.grayMedium : colors.base.grayDark};
    cursor: ${props => (props.disabled ? "default" : "pointer")};

    &:hover {
      color: ${props => (props.disabled ? null : colors.text.default)};
    }
    &.selected {
      color: ${props => (props.disabled ? null : colors.link.default)};
    }
  }
`

const TagWrapper = styled.span`
  float: right;
`

const Link = props => {
  const { displayName, documentation, implemented } = props.component
  const url = `/component/${kebabCase(displayName)}`
  const unstable = props.component.meta && props.component.meta.unstable

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
        {startCase(displayName)}
        {documentation ? null : (
          <TagWrapper>
            <Tag text="Not documented" />
          </TagWrapper>
        )}
        {unstable ? (
          <TagWrapper>
            <Tag warning text="Experimental" />
          </TagWrapper>
        ) : null}
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
