import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import Label from '../../atoms/label'
import NavigationSubnav from './navigation-subnav'
import { childrenMover } from '../../_helpers/children-mover'

const ariaCurrent = props => (props.selected ? { 'aria-current': 'page' } : {})

const enforceSingleChildren = children => {
  if (!children) return null
  if (children.constructor.name === 'Array') {
    return children[0] || null
  }
  return children
}

const findSelectedSubItem = subMenu => {
  let found = false

  React.Children.forEach(subMenu.props.children, link => {
    if (link.props.selected) found = true
  })

  return found
}

const processIcon = (children, selected, inSubMenu) =>
  React.Children.map(children, child => {
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

class NavigationItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { subMenuOpen: props.defaultOpen || false }

    this.toggleSubmenu = this.toggleSubmenu.bind(this)
  }

  toggleSubmenu() {
    this.setState({ subMenuOpen: !this.state.subMenuOpen })
  }

  setSubMenuState(subMenu, state) {
    if (!subMenu) return null
    return React.cloneElement(subMenu, state)
  }

  render() {
    const props = this.props
    const { inSubMenu, children } = props

    const { include, exclude } = childrenMover(NavigationSubnav)
    const [navigationItem, subMenu] = [exclude(children), enforceSingleChildren(include(children))]

    const selected = props.selected ? true : subMenu ? findSelectedSubItem(subMenu) : false
    const statefulSubMenu = this.setSubMenuState(subMenu, { open: this.state.subMenuOpen })

    return (
      <NavigationItem.Item>
        <NavigationItem.Element
          href={props.url}
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

NavigationItem.Item = styled.li``

NavigationItem.Element = styled.a`
  display: flex;
  align-items: flex-start;
  cursor: pointer;
  color: ${props => (props.selected ? colors.link.sidebarFocus : colors.link.sidebar)};
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

NavigationItem.Text = styled.div``

NavigationItem.Postfix = styled.div`
  margin-left: ${spacing.xsmall};
`

NavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  new: PropTypes.bool,
  url: PropTypes.string
}

NavigationItem.defaultProps = {
  url: '#'
}

export default NavigationItem
