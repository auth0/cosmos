import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import { Icon, Logo, Label } from '@auth0/cosmos'
import HamburgerButton from './hamburger-button'

import { Head, LogoContainer, LogoName, NavLinks, NavContainer } from './styles'

class Header extends React.Component {
  constructor() {
    super()
    /* by default, hide mobile nav */
    this.state = { isOpen: false }
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen })
  }
  revealHiddenFeatures() {
    /* remove hidden features css block */
    let tag = document.getElementById('hidden-features')
    tag.innerHTML = ''
  }

  render() {
    return (
      <NavContainer
        className={`${this.state.isOpen ? 'is-open' : 'is-closed'}`}
      >
        <Head>
          <LogoContainer onDoubleClick={this.revealHiddenFeatures}>
            <Logo />
            <LogoName>Cosmos</LogoName>
          </LogoContainer>
          <HamburgerButton
            isOpen={this.state.isOpen}
            onClick={() => this.toggleMenu()}
          />
        </Head>
        <NavLinks className={`${this.state.isOpen ? 'is-open' : 'is-closed'}`}>
          <li>
            <Link to="/?url=docs" onClick={() => this.toggleMenu()}>
              <Icon name="logs" color="grayLightest" size={20} />
              <span>Getting started</span>
            </Link>
          </li>
          <li>
            <Link to="/components" onClick={() => this.toggleMenu()}>
              <Icon name="logs" color="grayLightest" size={20} />
              <span>Components</span>
            </Link>
          </li>
          <li>
            <a href="/docs/#/playground" onClick={() => this.toggleMenu()}>
              <Icon name="code" color="grayLightest" size={16} />
              <span>Playground</span>
            </a>
          </li>
          <li>
            <a
              href="/sandbox"
              target="_blank"
              onClick={() => this.toggleMenu()}
            >
              <Icon name="support" color="grayLightest" size={20} />
              <span>Stories</span>
            </a>
          </li>
          <li>
            <a href="/" onClick={() => this.toggleMenu()}>
              <Icon name="gem" color="grayLightest" size={20} />
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
              <Icon name="brand-github" color="grayLightest" size={20} />
              <span>Github</span>
            </a>
          </li>
        </NavLinks>
      </NavContainer>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
