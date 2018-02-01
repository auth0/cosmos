import React from 'react'
import styled from 'styled-components'
import SidebarLink from './sidebar-link'
import SidebarLinkGroup from './sidebar-link-group'

const Sidebar = props => {
  return <Sidebar.Element {...props} />
}

Sidebar.Element = styled.div`
  float: left;
  width: 160px;
`

Sidebar.Link = SidebarLink
Sidebar.LinkGroup = SidebarLinkGroup

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

export default Sidebar
