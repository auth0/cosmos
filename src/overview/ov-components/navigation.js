import React from 'react'
import styled from 'styled-components'

import Container from './container'
import IconSketch from './icon-sketch'
import { Icon, Logo } from '@auth0/cosmos'

import { colors, spacing } from '@auth0/cosmos/tokens'

const Navigation = styled.nav`
  text-align: right;
  background-color: ${colors.base.grayLightest};
  margin-bottom: ${spacing.xlarge};
  background-color: #222228;
  .wrapper {
    height: 95px;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .logo {
    display: flex;
    align-items: center;
    .logo-word {
      text-transform: uppercase;
      font-size: 14px;
      letter-spacing: 1.4px;
      display: inline-block;
      color: ${colors.base.grayLightest};
      font-weight: 700;
      margin-left: 12px;
    }
  }
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
  a > ${Icon.Element} {
    margin-right: ${spacing.xsmall};
  }

  ul > li {
    display: inline-block;
    margin-left: ${spacing.large};
  }
`

export default () => (
  <Navigation>
    <Container>
      <div className="wrapper">
        <div className="nav-left">
          <h1 className="logo">
            <Logo />
            <span className="logo-word">Cosmos</span>
          </h1>
        </div>
        <div className="nav-right">
          <ul>
            <li>
              <a href="/docs">
                <Icon name="logs" color={colors.base.grayLightest} size={20} />
                <span>Documentation</span>
              </a>
            </li>
            <li>
              <a href="/redirect?url=manage/#/clients">
                <Icon name="clients" color={colors.base.grayLightest} size={20} />
                <span>PoC Manage</span>
              </a>
            </li>

            <li>
              <a href="/">
                <IconSketch />
                <span>Sketch UI Kit</span>
              </a>
            </li>
            <li>
              <a href="/sandbox">
                <Icon name="extensions" color={colors.base.grayLightest} size={20} />
                <span>Sandbox</span>
              </a>
            </li>
            <li>
              <a href="https://github.com/auth0/cosmos" target="_blank" rel="noopener noreferrer">
                <Icon name="code" color={colors.base.grayLightest} size={20} />
                <span>Github</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  </Navigation>
)
