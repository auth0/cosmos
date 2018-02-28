import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors, spacing } from '../../tokens'

import Link from './link'
import Group, { getGroups } from './group'
import attachChildren from './children'

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

const List = props => {
  /* Filter out internal components */
  let components = props.components.filter(c => !c.internal)
  components = attachChildren(components)
  const groups = getGroups(components)
  return (
    <div>
      <Group label="Getting started">
        <StyledLink>
          <NavLink exact to="/docs" activeClassName="selected">
            Install guide
          </NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to="/docs/guiding-principles" activeClassName="selected">
            Guiding Principles
          </NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to="/docs/contribution-guide" activeClassName="selected">
            Contributing to Cosmos
          </NavLink>
        </StyledLink>
      </Group>

      <Group label="Building blocks" open>
        {groups.atoms.map((component, index) => <Link key={index} component={component} />)}
      </Group>

      <Group label="Compound components">
        {groups.molecules.map((component, index) => {
          let children = <Link key={index} component={component} />

          if (component.children) {
            children = (
              <div key={index}>
                <Link key={index} component={component} />
                {component.children.map((child, index) => {
                  return <Link child key={index} component={child} parent={component} />
                })}
              </div>
            )
          }

          return children
        })}
      </Group>
    </div>
  )
}

export default List
