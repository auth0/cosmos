import * as React from 'react'
import styled from '../../styled'
import NavigationItem from './navigation-item'
import NavigationSubnav from './navigation-subnav'
import Automation from '../../_helpers/automation-attribute'
import uniqueId from '../../_helpers/uniqueId'
import { colors, spacing } from '../../tokens'

export interface INavigationProps {
  id?: string
  description: string
  children?: React.ReactNode
}

const Navigation = (props: INavigationProps) => {
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

const NavigationGroup = ({ title, children }) => {
  const id = uniqueId('navigationgroup')

  return (
    <NavigationGroup.Element {...Automation('navigation.group')} aria-labelledby={id}>
      <NavigationGroupHeader id={id}>{title}</NavigationGroupHeader>
      <ul>{children}</ul>
    </NavigationGroup.Element>
  )
}

NavigationGroup.Element = styled.section`
  /* background-color: violet; */
  :not(:last-of-type):not(:only-of-type) {
    margin-bottom: ${spacing.medium};
  }
`

const NavigationGroupHeader = styled.h2`
  text-transform: uppercase;
  font-size: 12px;
  color: ${colors.text.secondary};
  letter-spacing: 1px;
  padding-bottom: ${spacing.xxsmall};
`


Navigation.List = styled.ul``
Navigation.Item = NavigationItem
Navigation.Group = NavigationGroup
Navigation.Subnav = NavigationSubnav
Navigation.GroupHeader = NavigationGroupHeader

Navigation.defaultProps = {}

export default Navigation
