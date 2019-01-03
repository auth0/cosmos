import React from 'react'
import styled from '@auth0/cosmos/styled'
import SidebarLink from './sidebar-link'
import SidebarLinkGroup from './sidebar-link-group'
import Automation from '../../_helpers/automation-attribute'

const Sidebar = props => {
  return (
    <Sidebar.Element {...Automation('Sidebar Nav')} aria-label="[landmark description]">
      {/* if group, then do the ul within the section, else do the ul outside. */}
      <Sidebar.List {...Automation('Sidebar List')} {...props} />
    </Sidebar.Element>
  )
}

Sidebar.Element = styled.nav`
  /* * {
    border: 1px solid red;
  } */
  /* float: left; */
  /* width: 160px; */
`

Sidebar.Group = styled.section`
  /* background-color: violet; */
  :not(:last-of-type):not(:only-of-type) {
    margin-bottom: 20px;
  }
`

Sidebar.GroupHeader = styled.h2`
  /* background-color: papayawhip; */
  text-transform: uppercase;
`

Sidebar.List = styled.ul``

Sidebar.Link = SidebarLink
Sidebar.LinkGroup = SidebarLinkGroup

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

export default Sidebar
