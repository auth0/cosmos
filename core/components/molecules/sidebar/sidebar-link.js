import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import Label from '../../atoms/label'

const ariaCurrent = props => (props.selected ? { 'aria-current': 'page' } : {})

const processChildren = props =>
  React.Children.map(props.children, child => {
    if (child && child.type === Icon) {
      return React.cloneElement(child, {
        size: 18,
        color: props.selected ? colors.icon.sidebarFocus : colors.icon.sidebar
      })
    }

    return child
  })

const SidebarLink = props => {
  return (
    <SidebarLink.Item>
      <SidebarLink.Element
        href={props.url}
        onClick={props.onClick}
        selected={props.selected}
        aria-expanded={props.open}
        {...ariaCurrent(props)}
        {...Automation('sidebar.link')}
        id={props.id}
        tabIndex="0"
      >
        {processChildren(props)}
      </SidebarLink.Element>
    </SidebarLink.Item>
  )
}

SidebarLink.Item = styled.li``

SidebarLink.Element = styled.a`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.selected ? colors.link.sidebarFocus : colors.link.sidebar)};
  font-size: 13px;
  text-decoration: none;
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
  }
  ${Label.Element} {
    /* should we add a new appearance to the label? */
    color: ${colors.link.sidebarHover};
    border-color: ${colors.link.sidebarHover};
  }
`

SidebarLink.Text = styled.div``
SidebarLink.Postfix = styled.div`
  margin-left: ${spacing.small};
`

SidebarLink.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  new: PropTypes.bool,
  url: PropTypes.string
}

SidebarLink.defaultProps = {}

export default SidebarLink
