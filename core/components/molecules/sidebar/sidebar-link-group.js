import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import SidebarLink from './sidebar-link'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

class SidebarLinkGroup extends React.Component {
  constructor(props) {
    super(props)
    let open = false

    /* If a child is selected, group should be open */
    React.Children.forEach(props.children, child => {
      if (child.props.selected) open = true
    })

    this.state = { open }
  }

  handleClick = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { icon, label, children } = this.props
    const { open } = this.state
    return (
      <SidebarLinkGroup.Element>
        <SidebarLink icon={icon} label={label} onClick={this.handleClick} />
        <SidebarLinkGroup.Content open={open}>{children}</SidebarLinkGroup.Content>
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
