import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import SidebarLink from './sidebar-link'
import SidebarLinkGroup from './sidebar-link-group'
import Automation from '../../_helpers/automation-attribute'
import uniqueId from '../../_helpers/uniqueId'
import { colors } from '@auth0/cosmos-tokens'

const Sidebar = props => {
  return (
    <Sidebar.Element
      {...Automation('sidebar')}
      aria-label={props.description}
      role="navigation"
      id={props.id}
    >
      {/* if group, then do the ul within the section, else do the ul outside. */}
      <Sidebar.List {...Automation('sidebar.group')} {...props} />
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

Sidebar.Group = ({ title, children }) => {
  const id = uniqueId('sidebargroup')

  return (
    <Sidebar.Group.Element {...Automation('sidebar.group')} aria-labelledby={id}>
      <Sidebar.GroupHeader id={id}>{title}</Sidebar.GroupHeader>
      <ul>{children}</ul>
    </Sidebar.Group.Element>
  )
}

Sidebar.Group.Element = styled.section`
  /* background-color: violet; */
  :not(:last-of-type):not(:only-of-type) {
    margin-bottom: 20px;
  }
`

Sidebar.GroupHeader = styled.h2`
  /* background-color: papayawhip; */
  text-transform: uppercase;
  font-size: 11px;
  color: ${colors.text.secondary};
`

Sidebar.List = styled.ul``

Sidebar.Link = SidebarLink
Sidebar.LinkGroup = SidebarLinkGroup

Sidebar.propTypes = {
  description: PropTypes.string.isRequired
}

Sidebar.defaultProps = {}

export default Sidebar
