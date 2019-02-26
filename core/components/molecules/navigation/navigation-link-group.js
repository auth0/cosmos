import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Icon, { __ICONNAMES__ } from '../../atoms/icon'
import NavigationLink from './navigation-link'

import { spacing, colors } from '@auth0/cosmos-tokens'

import Automation from '../../_helpers/automation-attribute'

const passSubMenuPropToChildren = children =>
  React.Children.map(children, el => React.cloneElement(el, { inSubMenu: true }))

const NavigationLinkGroup = props => {
  const { children, open } = props

  return (
    <NavigationLinkGroup.Content
      {...Automation('navigation.link-group')}
      open={open}
      hidden={!open}
    >
      {passSubMenuPropToChildren(children)}
    </NavigationLinkGroup.Content>
  )
}

NavigationLinkGroup.Content = styled.ul`
  flex: 1 0 100%;
  margin-left: calc(18px + ${spacing.xsmall});
  overflow: hidden;
  max-height: ${props => (props.open ? props.children.length * 50 + 'px' : '0')};
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
  transition: all 0.3s ease-in-out;

  ${NavigationLink} {
    a {
      padding-top: ${spacing.xxsmall};
      padding-bottom: ${spacing.xxsmall};
    }
  }
`

NavigationLinkGroup.propTypes = {
  children: PropTypes.node.isRequired
}

NavigationLinkGroup.defaultProps = {}

export default NavigationLinkGroup
