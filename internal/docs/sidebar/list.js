import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { colors, spacing } from '@auth0/cosmos/tokens'

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

const guides = [
  { path: '/', title: 'Getting started' },
  { path: '/usage', title: 'How to use Cosmos?' },
  { path: '/guiding-principles', title: 'Guiding Principles' },
  { path: '/system-guidelines', title: 'System Guidelines' },
  { path: '/contribution-guide', title: 'Contributing to Cosmos' },
  { path: '/faqs', title: 'FAQs' },
  { path: '/changes', title: 'Changelog' },
  { path: '/automation', title: 'Automation Glossary' }
]

const List = props => {
  /* Filter out internal components */
  let components = props.components.filter(c => !c.internal)
  components = attachChildren(components)
  const groups = getGroups(components)

  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(props.query.toLowerCase())
  )

  return (
    <div>
      <Group label="GUIDES">
        {filteredGuides.map((guide, index) => (
          <StyledLink key={index}>
            <NavLink exact to={guide.path} activeClassName="selected">
              {guide.title}
            </NavLink>
          </StyledLink>
        ))}
      </Group>

      <Group label="Building blocks" open>
        {groups.atoms.map((component, index) => (
          <Link key={index} component={component} />
        ))}
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
