import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import SidebarLink from './sidebar-link'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'
import Automation from '../../_helpers/automation-attribute'

class SidebarLinkGroup extends React.Component {
  constructor(props) {
    super(props)
    const open = props.defaultOpen || false
    let subItemSelected = false

    React.Children.forEach(props.children, child => {
      /* group should be open and parent be selected */
      if (child && child.props && child.props.selected) subItemSelected = true
    })

    this.state = { open, subItemSelected }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { icon, label, children } = this.props
    const { open, subItemSelected } = this.state

    return (
      <SidebarLinkGroup.Element {...Automation('sidebar.group')} {...this.props}>
        <SidebarLink
          icon={icon}
          label={label}
          onClick={this.handleClick}
          selected={subItemSelected}
        />
        <SidebarLinkGroup.Content open={subItemSelected || open}>
          {children}
        </SidebarLinkGroup.Content>
      </SidebarLinkGroup.Element>
    )
  }
}

SidebarLinkGroup.Element = styled.div``

SidebarLinkGroup.Content = styled.div`
  padding-left: 1.75em;
  overflow: hidden;
  max-height: ${props => (props.open ? props.children.length * 50 + 'px' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: max-height 0.5s ease, visibility 0.5s ease;
`

SidebarLinkGroup.propTypes = {
  icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

SidebarLinkGroup.defaultProps = {}

export default SidebarLinkGroup
