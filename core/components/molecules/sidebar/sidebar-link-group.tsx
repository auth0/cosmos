import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import SidebarLink from './sidebar-link'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'
import Automation from '../../_helpers/automation-attribute'

export interface ISidebarLinkGroupProps {
  /** HTML ID of the component */
  id?: string
  icon: string
  label: string
  children: React.ReactNode,
  /** @internal */
  defaultOpen?: boolean
}

interface ISidebarLinkGroupState {
  subItemSelected: boolean
  open: boolean
}

class SidebarLinkGroup extends React.Component<ISidebarLinkGroupProps, ISidebarLinkGroupState> {
  static Element = styled.div``

  static Content = styled.div`
    padding-left: 1.75em;
    overflow: hidden;
    max-height: ${props => (props.open ? props.children.length * 50 + 'px' : '0')};
    visibility: ${props => (props.open ? 'visible' : 'hidden')};
    transition: max-height 0.5s ease, visibility 0.5s ease;
  `

  static defaultProps = {}

  constructor(props) {
    super(props)

    this.state = { open: props.defaultOpen || false, subItemSelected: false }
    this.evaluateSubItemSelection(props)
  }

  evaluateSubItemSelection(props) {
    let subItemSelected = false
    React.Children.forEach(props.children, child => {
      /* group should be open and parent be selected */
      if (child && child.props && child.props.selected) subItemSelected = true
    })

    if (this.state.subItemSelected !== subItemSelected) {
      this.setState({ subItemSelected })
    }
  }

  componentDidUpdate() {
    this.evaluateSubItemSelection(this.props)
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


export default SidebarLinkGroup
