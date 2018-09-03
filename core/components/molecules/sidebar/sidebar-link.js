import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'

const SidebarLink = props => {
  return (
    <SidebarLink.Element
      href={props.url}
      onClick={props.onClick}
      selected={props.selected}
      {...Automation('sidebar.link')}
    >
      <Icon
        name={props.icon ? props.icon : 'arrow-right'}
        size={18}
        color={props.selected ? colors.icon.sidebarFocus : colors.icon.sidebar}
      />
      <span>{props.label}</span>
    </SidebarLink.Element>
  )
}

SidebarLink.Element = styled.a`
  display: block;
  cursor: pointer;
  color: ${props => (props.selected ? colors.link.sidebarFocus : colors.link.sidebar)};
  text-decoration: none;
  font-size: 13px;
  line-height: 1;
  padding: calc(${spacing.xsmall} / 2) 0;
  margin-bottom: 10px;
  &:hover  {
    color: ${colors.link.sidebarHover};
    ${Icon.Element} path {
      fill: ${colors.link.sidebarHover};
    }
  }
  ${Icon.Element} {
    margin-right: ${spacing.xsmall};
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
`

SidebarLink.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOf(__ICONNAMES__),
  onClick: PropTypes.func,
  selected: PropTypes.bool,
  url: PropTypes.string
}

SidebarLink.defaultProps = {}

export default SidebarLink
