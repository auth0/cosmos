import React from "react"
import styled from "styled-components"

import { spacing } from "@auth0/cosmos/tokens"
import { StyledLink } from "./link"

import { colors, fonts } from "@auth0/cosmos/tokens"
import { Link as GatsbyLink } from "gatsby"
const Label = styled(StyledLink)`
  a {
    text-transform: uppercase;
    padding: ${spacing.xsmall} ${spacing.medium};
    cursor: ${props => (props.url ? "pointer" : "default")};
    font-size: 13px;
    letter-spacing: 1px;
    font-weight: ${fonts.weight.medium};
    color: ${colors.base.default};
    &:hover {
      background: initial;
      color: ${colors.base.default};
    }
  }
`

const LinkGroup = styled.div`
  margin-top: ${spacing.medium};
`

const Group = props => (
  <LinkGroup {...props}>
    <Label {...props}>
      {props.url ? (
        <GatsbyLink to={props.url} activeClassName="selected">
          {props.label}
        </GatsbyLink>
      ) : (
        <a>{props.label}</a>
      )}
    </Label>
    {props.children}
  </LinkGroup>
)

const getGroups = components => {
  const groups = { atoms: [], molecules: [], internal: [], layouts: [] }

  components.map(component => {
    let category

    if (component.internal) category = "internal"
    else {
      /* parse filepath to get category (atom, molecules) */
      category = component.filepath.split("/")[2]
    }

    groups[category].push(component)

    return component // meh
  })

  return groups
}

export default Group
export { getGroups }
