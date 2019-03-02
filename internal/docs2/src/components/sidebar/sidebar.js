import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Item from './sidebar-item'

const Sidebar = ({ data }) => {
  let components = data.allFile.edges
  let navItems = data.allSidebarYaml.edges

  return (
    <nav>
      <ul>
        {navItems.map((item, index) => (
          <Item item={item} key={index} components={components} />
        ))}
      </ul>
    </nav>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        allSidebarYaml {
          edges {
            node {
              title
              link
              items {
                title
                link
              }
            }
          }
        }
        allFile(
          filter: {
            relativeDirectory: { regex: "/(components)/" }
            base: { ne: "index.md" }
          }
          sort: { fields: name }
        ) {
          edges {
            node {
              childMdx {
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  status
                }
              }
            }
          }
        }
      }
    `}
    render={data => <Sidebar data={data} {...props} />}
  />
)
