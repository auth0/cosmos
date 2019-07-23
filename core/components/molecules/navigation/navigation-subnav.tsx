import * as React from 'react'
import styled from '../../styled'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import NavigationItem from './navigation-item'

import { spacing } from '../../tokens'

import Automation from '../../_helpers/automation-attribute'

const passSubMenuPropToChildren = (children) =>
  React.Children.map(children, (el) => {
    if (!el) { return null }
    return React.cloneElement(el, { inSubMenu: true })
  })

export interface INavigationSubnavProps {
  open?: boolean
  icon?: string
  label?: string
  children: React.ReactNode
}

const NavigationSubnav = (props: INavigationSubnavProps) => {
  const { children, open } = props

  return (
    <NavigationSubnav.Content {...Automation('navigation.link-group')} open={open} hidden={!open}>
      {passSubMenuPropToChildren(children)}
    </NavigationSubnav.Content>
  )
}

NavigationSubnav.Content = styled.ul`
  flex: 1 0 100%;
  margin-left: calc(18px + ${spacing.xsmall});
  overflow: hidden;
  max-height: ${(props) => (props.open ? props.children.length * 50 + 'px' : '0')};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;

  ${NavigationItem} {
    a {
      padding-top: ${spacing.xxsmall};
      padding-bottom: ${spacing.xxsmall};
    }
  }
  ${Icon.Element} svg {
    width: 16px;
    height: 16px;
  }
`

NavigationSubnav.defaultProps = {}

export default NavigationSubnav
