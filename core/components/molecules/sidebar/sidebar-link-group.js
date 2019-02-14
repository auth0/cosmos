import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import { spacing, colors } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

const SidebarLinkGroup = props => {
  const { children, open } = props

  return (
    <SidebarLinkGroup.Content {...Automation('sidebar.link-group')} open={open} hidden={!open}>
      {children}
    </SidebarLinkGroup.Content>
  )
}

SidebarLinkGroup.Content = styled.ul`
  flex: 1 0 100%;
  margin-left: calc(18px + ${spacing.xsmall});
  overflow: hidden;
  max-height: ${props => (props.open ? props.children.length * 50 + 'px' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;

  ${Icon.Element} path {
    fill: ${colors.text.secondary};
  }
`

SidebarLinkGroup.propTypes = {
  children: PropTypes.node.isRequired
}

SidebarLinkGroup.defaultProps = {}

export default SidebarLinkGroup
