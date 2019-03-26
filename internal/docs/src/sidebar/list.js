import React from "react"
import { Link as NavLink } from "gatsby"
import styled from "styled-components"

import { colors, spacing } from "@auth0/cosmos/tokens"

import Link from "./link"
import Group, { getGroups } from "./group"
import attachChildren from "./children"
import { graphql, useStaticQuery } from "gatsby"
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
function createLinkForGuides(title, path, items, parent) {
  if (items) {
    return (
      <Group key={path} url={path} label={title}>
        {items.map(item => {
          return createLinkForGuides(item.title, item.path, item.items, true)
        })}
      </Group>
    )
  }
  return (
    <StyledLink key={path} isChild={parent}>
      <NavLink to={path} activeClassName="selected">
        {title}
      </NavLink>
    </StyledLink>
  )
}

const List = props => {
  const { allSidebarYaml } = useStaticQuery(graphql`
    {
      allSidebarYaml {
        edges {
          node {
            title
            path
            items {
              title
              path
            }
          }
        }
      }
    }
  `)
  const guides = allSidebarYaml.edges.map(({ node }) => node)
  /* Filter out internal components */
  let components = props.components

  // .filter(c => !c.internal)
  components = attachChildren(components)
  const groups = getGroups(components)

  const filteredGuides = guides.filter(guide =>
    guide.title.toLowerCase().includes(props.query.toLowerCase())
  )

  return (
    <div>
      <Group label="GUIDES">
        {filteredGuides.map(guide =>
          createLinkForGuides(guide.title, guide.path, guide.items)
        )}
      </Group>

      <Group label="Layouts" open>
        {groups.layouts.map((component, index) => (
          <Link key={index} component={component} />
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
                  return (
                    <Link
                      child
                      key={index}
                      component={child}
                      parent={component}
                    />
                  )
                })}
              </div>
            )
          }

          return children
        })}
      </Group>

      <Group label="Hidden" className="hidden">
        {groups.internal.map((component, index) => {
          let children = <Link key={index} component={component} />

          if (component.children) {
            children = (
              <div key={index}>
                <Link key={index} component={component} />
                {component.children.map((child, index) => {
                  return (
                    <Link
                      child
                      key={index}
                      component={child}
                      parent={component}
                    />
                  )
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
