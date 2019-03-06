import { Link } from 'gatsby'
import styled from '@auth0/cosmos/styled'
import { colors, spacing } from '@auth0/cosmos/tokens'

const Nav = styled.nav`
  padding: 2rem 0;
  background-color: #f1f1f1;
  > ul > li:not(:last-child) {
    margin-bottom: ${spacing.medium};
  }
`

const NavItem = styled.li`
  display: block;
`

const NavLink = styled(Link)`
  color: #636363;
  text-decoration: none;
  display: block;
  padding: 8px 1.5em;
  &:hover {
    color: #333;
  }
  &.active {
    color: ${colors.link.default};
  }
`

const NavHeader = styled(NavLink)`
  color: #333;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export { Nav, NavHeader, NavItem, NavLink }
