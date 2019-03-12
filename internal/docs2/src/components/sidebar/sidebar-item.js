import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import styled from '@auth0/cosmos/styled'

import { Label, Stack } from '@auth0/cosmos'
import { NavHeader, NavItem, NavLink } from './styles'

const Item = ({ item, components }) => {
  let url = item.node.link
  let title = item.node.title
  let subitems = item.node.items

  return (
    <Fragment>
      {subitems ? (
        <NavItem>
          <NavHeader to={url}>{title}</NavHeader>
          <ul>
            {subitems.map((item, index) => (
              <NavItem key={index}>
                <NavLink activeClassName="active" to={item.link}>
                  {item.title}
                </NavLink>
                {item.items ? (
                  <ul>
                    {item.items.map((subitem, index) => (
                      <NavLink activeClassName="active" to={subitem.link}>
                        {subitem.title}
                      </NavLink>
                    ))}
                  </ul>
                ) : null}
              </NavItem>
            ))}
          </ul>
        </NavItem>
      ) : (
        <NavItem>
          {title === 'Components' ? (
            <Fragment>
              <NavHeader to={url}>{title}</NavHeader>
              <ul>
                {components.map((item, index) => (
                  <NavItem key={index}>
                    <NavLink
                      to={item.node.childMdx.fields.slug}
                      activeClassName="active"
                    >
                      <span>
                        {item.node.childMdx.frontmatter.title}
                        {item.node.childMdx.frontmatter.status ===
                        'experimental' ? (
                          <Label appearance="warning">Experimental</Label>
                        ) : null}
                      </span>
                    </NavLink>
                  </NavItem>
                ))}
              </ul>
            </Fragment>
          ) : (
            <NavHeader to={url}>{title}</NavHeader>
          )}
        </NavItem>
      )}
    </Fragment>
  )
}

export default Item
