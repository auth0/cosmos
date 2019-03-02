import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from '@auth0/cosmos/styled'

import { Label, Stack } from '@auth0/cosmos'

const NavItem = styled.li`
  display: block;
  > ul > li {
    margin-left: 1rem;
    border-left: 1px solid #333;
  }
`

const NavLink = styled(Link)`
  color: #333;
  text-decoration: none;
  display: block;
  padding: 0.25em 1em;
`

const Header = styled(NavLink)`
  color: #333;
  font-weight: bolder;
`

const Item = ({ item, components }) => {
  let url = item.node.link
  let title = item.node.title
  let subitems = item.node.items

  return (
    <Fragment>
      {subitems ? (
        <NavItem>
          <Header to={url}>{title}</Header>
          <ul>
            {subitems.map((item, index) => (
              <NavItem key={index}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </NavItem>
            ))}
          </ul>
        </NavItem>
      ) : (
        <NavItem>
          {title === 'Components' ? (
            <Fragment>
              <Header to={url}>{title}</Header>
              <ul>
                {components.map((item, index) => (
                  <NavItem key={index}>
                    <NavLink to={item.node.childMdx.fields.slug}>
                      <Stack>
                        {item.node.childMdx.frontmatter.title}
                        {item.node.childMdx.frontmatter.status ===
                        'experimental' ? (
                          <Label appearance="warning">Experimental</Label>
                        ) : null}
                      </Stack>
                    </NavLink>
                  </NavItem>
                ))}
              </ul>
            </Fragment>
          ) : (
            <Header to={url}>{title}</Header>
          )}
        </NavItem>
      )}
    </Fragment>
  )
}

export default Item
