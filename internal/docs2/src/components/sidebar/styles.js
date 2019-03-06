import { Link } from 'gatsby'
import styled from '@auth0/cosmos/styled'

const Nav = styled.nav`
  background-color: #f1f1f1;
`

const NavItem = styled.li`
  display: block;
`

const NavLink = styled(Link)`
  color: #636363;
  text-decoration: none;
  display: block;
  padding: 0.3em 1.5em;
  &:hover {
    color: #333;
  }
`

const NavHeader = styled(NavLink)`
  color: #333;
  font-size: 13px;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export { Nav, NavHeader, NavItem, NavLink }
