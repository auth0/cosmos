import styled from '@auth0/cosmos/styled'

import { colors, spacing } from '@auth0/cosmos/tokens'
import { Icon, Label } from '@auth0/cosmos'

const NavContainer = styled.nav`
  position: fixed;
  z-index: 10;
  width: 100%;
  top: 0;
  left: 0;
  background-color: #222;
  height: 80px;
  padding: 0 ${spacing.medium};

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;

  a {
    display: block;
    vertical-align: middle;
    text-decoration: none;
    padding: ${spacing.medium} 0;
    color: ${colors.base.grayLightest};
  }

  a > span {
    display: inline-block;
    vertical-align: middle;
  }

  a > span + span {
    margin-left: ${spacing.xsmall};
  }

  a > ${Icon.Element} {
    margin-right: ${spacing.xsmall};
  }

  ${Label.Element} {
    display: inline-block;
    margin-left: 1em;
    font-size: 0.65em;
  }

  @media (max-width: 960px) {
    flex-direction: column;
    justify-content: start;
    padding: 0;

    &.is-open {
      flex: 0 1 80px;
      height: 100%;
    }
  }
`

const NavLinks = styled.ul`
  li {
    display: inline-block;
    margin-left: ${spacing.large};
  }

  @media (max-width: 960px) {
    width: 100%;

    &.is-open {
      display: block;
      flex: 1;
      overflow: auto;
    }

    &.is-closed {
      display: none;
    }

    li {
      border-bottom: 1px solid ${colors.base.default};
      display: block;
      margin-left: 0;
      padding: 0 ${spacing.medium};
    }

    li:first-child {
      border-top: 1px solid ${colors.base.default};
    }
  }
`

const LogoName = styled.h1`
  font-size: 14px;
  letter-spacing: 1.4px;
  display: inline-block;
  color: ${colors.base.grayLightest};
  font-weight: 700;
  margin-left: 16px;
  margin-right: 0.75em;
  text-transform: uppercase;
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Head = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding: 0 ${spacing.medium};
    width: 100%;
  }
`

export { Head, LogoContainer, LogoName, NavLinks, NavContainer }
