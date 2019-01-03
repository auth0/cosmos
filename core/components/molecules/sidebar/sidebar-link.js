import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

import { colors, spacing } from '@auth0/cosmos-tokens'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import Label from '../../atoms/label'

const SidebarLink = props => {
  return (
    <li>
      <SidebarLink.Element
        href={props.url}
        onClick={props.onClick}
        selected={props.selected}
        {...Automation('sidebar.link')}
        {...props}
      >
        <Icon
          name={props.icon ? props.icon : 'arrow-right'}
          size={18}
          color={props.selected ? colors.icon.sidebarFocus : colors.icon.sidebar}
        />
        <SidebarLink.Text>{props.label}</SidebarLink.Text>
        {props.new ? <Label appearance="default">NEW</Label> : null}
      </SidebarLink.Element>
    </li>
  )
}

SidebarLink.Element = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${props => (props.selected ? colors.link.sidebarFocus : colors.link.sidebar)};
  /* font-size: 13px; */
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
    margin-left: ${spacing.small};
    /* should we add a new appearance to the label? */
    color: ${colors.link.sidebarHover};
    border-color: ${colors.link.sidebarHover};
  }
`

SidebarLink.Text = styled.span`
  display: block;
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
