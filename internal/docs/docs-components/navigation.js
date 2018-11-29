import React, { Component } from 'react'
import styled from 'styled-components'

import { Icon, Logo, Label } from '@auth0/cosmos'
import { StyledLabel } from '../../../core/components/atoms/label'
import { colors, spacing } from '@auth0/cosmos/tokens'
import HamburgerButton from './hamburger-button'
import IconSketch from './sketch-icon'
import IconGithub from './github-icon'
import VersionSwitcher from './version-switcher'

const NavigationContainer = styled.nav`
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

  ${StyledLabel} {
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

const NavigationLinks = styled.ul`
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

const Header = styled.div`
  height: 80px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 960px) {
    padding: 0 ${spacing.medium};
    width: 100%;
  }
`

class Navigation extends Component {
  constructor() {
    super()
    /* by default, hide mobile nav */
    this.state = { isOpen: false }
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <NavigationContainer className={`${this.state.isOpen ? 'is-open' : 'is-closed'}`}>
        <Header>
          <LogoContainer>
            <Logo />
            <LogoName>Cosmos</LogoName>
            <VersionSwitcher />
          </LogoContainer>
          <HamburgerButton isOpen={this.state.isOpen} onClick={() => this.toggleMenu()} />
        </Header>
        <NavigationLinks className={`${this.state.isOpen ? 'is-open' : 'is-closed'}`}>
          <li>
            <a href="/?url=docs" onClick={() => this.toggleMenu()}>
              <Icon name="logs" color="grayLightest" size={20} />
              <span>Documentation</span>
            </a>
          </li>
          <li>
            <a href="/docs/#/playground" onClick={() => this.toggleMenu()}>
              <Icon name="code" color="grayLightest" size={16} />
              <span>Playground</span>
            </a>
          </li>
          <li>
            <a href="/sandbox" target="_blank" onClick={() => this.toggleMenu()}>
              <Icon name="support" color="grayLightest" size={20} />
              <span>Stories</span>
            </a>
          </li>
          <li>
            <a href="/" onClick={() => this.toggleMenu()}>
              <IconSketch />
              <span>UI Kit</span>
              <Label appearance="information">Soon</Label>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/auth0/cosmos"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => this.toggleMenu()}
            >
              <IconGithub />
              <span>Github</span>
            </a>
          </li>
        </NavigationLinks>
      </NavigationContainer>
    )
  }
}

export default Navigation
