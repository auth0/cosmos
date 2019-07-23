import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'

import { colors, spacing } from '../../tokens'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import Label from '../../atoms/label'
import NavigationSubnav from './navigation-subnav'
import { childrenMover } from '../../_helpers/children-mover'

const ariaCurrent = (props) => (props.selected ? { 'aria-current': 'page' } : {})
const { include: includeSubnav, exclude: excludeSubnav } = childrenMover(NavigationSubnav)

const enforceSingleChildren = (children) => {
  if (!children) { return null }
  if (children.constructor.name === 'Array') {
    return children[0] || null
  }
  return children
}

const findSelectedSubItem = (subMenu) => {
  let found = false

  React.Children.forEach(subMenu.props.children, (link) => {
    if (link && link.props.selected) { found = true }
  })

  return found
}

const processIcon = (children, selected, inSubMenu) =>
  React.Children.map(children, (child) => {
    if (child && child.type === Icon) {
      return React.cloneElement(child, {
        size: 18, // FIXME: Use a token
        color: selected
          ? colors.icon.sidebarFocus
          : inSubMenu
          ? colors.text.subtle
          : colors.icon.sidebar
      })
    }

    return child
  })

export interface INavigationItemProps {
  id?: string
  icon?: string
  label?: string
  onClick?: Function
  selected?: boolean
  new?: boolean
  url?: string
  target?: string
  open?: boolean
  /** @internal */
  inSubMenu?: boolean
  /** @internal */
  defaultOpen?: boolean
}

export interface INavigationItemState {
  subMenuOpen: boolean
}

class NavigationItem extends React.Component<INavigationItemProps, INavigationItemState> {
  public static Item = styled.li``
  public static Text = styled.div``

  public static Element = styled.a`
    display: flex;
    align-items: flex-start;
    cursor: pointer;
    color: ${(props) => (props.selected ? colors.link.sidebarFocus : colors.link.sidebar)};
    font-size: 13px;
    text-decoration: none;
    word-break: break-word;
    padding-top: ${spacing.xsmall};
    padding-bottom: ${spacing.xsmall};
    &:hover  {
      color: ${colors.link.sidebarHover};
      ${Icon.Element} path {
        fill: ${colors.link.sidebarHover};
      }
    }
    ${Icon.Element} {
      margin-right: ${spacing.xsmall};
      margin-top: 1px;
    }
    ${Label.Element} {
      /* should we add a new appearance to the label? */
      color: ${colors.link.sidebarHover};
      border-color: ${colors.link.sidebarHover};
    }
  `

  public static Postfix = styled.div`
    margin-left: ${spacing.xsmall};
  `

  constructor(props) {
    super(props)
    this.state = { subMenuOpen: props.defaultOpen || this.isSelected }

    this.toggleSubmenu = this.toggleSubmenu.bind(this)
  }

  get isSelected() {
    const { selected, children } = this.props
    const subMenu = enforceSingleChildren(includeSubnav(children))
    return selected || (subMenu ? findSelectedSubItem(subMenu) : false)
  }

  public toggleSubmenu() {
    this.setState({ subMenuOpen: !this.state.subMenuOpen })
  }

  public setSubMenuState(subMenu, state) {
    if (!subMenu) { return null }
    return React.cloneElement(subMenu, state)
  }

  public render() {
    const props = this.props
    const { inSubMenu, children } = props

    const [navigationItem, subMenu] = [
      excludeSubnav(children),
      enforceSingleChildren(includeSubnav(children))
    ]

    const selected = this.props.defaultOpen || this.isSelected
    const statefulSubMenu = this.setSubMenuState(subMenu, { open: this.state.subMenuOpen })

    return (
      <NavigationItem.Item>
        <NavigationItem.Element
          href={props.url}
          target={props.target}
          onClick={subMenu ? this.toggleSubmenu : props.onClick}
          selected={selected}
          aria-expanded={props.open}
          id={props.id}
          {...ariaCurrent(props)}
          {...Automation('navigation.link')}
        >
          {processIcon(navigationItem, selected, inSubMenu)}
        </NavigationItem.Element>

        {statefulSubMenu}
      </NavigationItem.Item>
    )
  }
}

export default NavigationItem
