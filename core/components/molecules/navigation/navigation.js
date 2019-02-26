import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import NavigationItem from './navigation-item'
import NavigationSubnav from './navigation-subnav'
import Automation from '../../_helpers/automation-attribute'
import uniqueId from '../../_helpers/uniqueId'
import { colors, spacing } from '@auth0/cosmos-tokens'

const Navigation = props => {
  return (
    <Navigation.Element
      {...Automation('navigation')}
      aria-label={props.description}
      role="navigation"
      id={props.id}
    >
      {/* if group, then do the ul within the section, else do the ul outside. */}
      <Navigation.List {...Automation('navigation.group')} {...props} />
    </Navigation.Element>
  )
}

Navigation.Element = styled.nav``

Navigation.Group = ({ title, children }) => {
  const id = uniqueId('navigationgroup')

  return (
    <Navigation.Group.Element {...Automation('navigation.group')} aria-labelledby={id}>
      <Navigation.GroupHeader id={id}>{title}</Navigation.GroupHeader>
      <ul>{children}</ul>
    </Navigation.Group.Element>
  )
}

Navigation.Group.Element = styled.section`
  /* background-color: violet; */
  :not(:last-of-type):not(:only-of-type) {
    margin-bottom: ${spacing.medium};
  }
`

Navigation.GroupHeader = styled.h2`
  text-transform: uppercase;
  font-size: 11px;
  color: ${colors.text.secondary};
`

Navigation.List = styled.ul``

Navigation.Item = NavigationItem
Navigation.Subnav = NavigationSubnav

Navigation.propTypes = {
  description: PropTypes.string.isRequired
}

Navigation.defaultProps = {}

export default Navigation
