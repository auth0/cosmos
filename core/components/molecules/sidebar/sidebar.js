import React from 'react'
import styled from '@auth0/cosmos/styled'
import SidebarLink from './sidebar-link'
import SidebarLinkGroup from './sidebar-link-group'

import { spacing } from '@auth0/cosmos-tokens'
import Icon from '../../atoms/icon'

const Sidebar = props => {
  return <Sidebar.Element {...props} />
}

Sidebar.Element = styled.div`
  float: left;
  width: 160px;
  ${Icon.Element} {
    margin-right: ${spacing.xsmall};
    vertical-align: middle;
  }
`

Sidebar.Link = SidebarLink
Sidebar.LinkGroup = SidebarLinkGroup

Sidebar.propTypes = {}

Sidebar.defaultProps = {}

export default Sidebar
