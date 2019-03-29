import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import SidebarLink from './sidebar-link'
import SidebarLinkGroup from './sidebar-link-group'
import Automation from '../../_helpers/automation-attribute'

import { spacing } from '@auth0/cosmos-tokens'
import Icon from '../../atoms/icon'

export interface ISidebarProps {
  /** HTML ID of the component */
  id?: string
  children?: React.ReactNode
}

const Sidebar = (props: ISidebarProps) => {
  return <Sidebar.Element {...Automation('sidebar')} {...props} />
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
