import React from 'react'
import styled from 'styled-components'

import { Icon, Logo, Label } from '@auth0/cosmos'
import { StyledLabel } from '../../../core/components/atoms/label'
import { colors, spacing } from '@auth0/cosmos/tokens'
import IconSketch from './sketch-icon'
import IconGithub from './github-icon'

import { version } from '@auth0/cosmos/package.json'

const Navigation = styled.nav`
  position: fixed;
  z-index: 1000;
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
  a > ${Icon.Element} {
    margin-right: ${spacing.xsmall};
  }

  ${StyledLabel} {
    display: inline-block;
    margin-left: 1em;
    font-size: 0.65em;
  }

  ul > li {
    display: inline-block;
    margin-left: ${spacing.large};
  }
`

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 14px;
    letter-spacing: 1.4px;
    display: inline-block;
    color: ${colors.base.grayLightest};
    font-weight: 700;
    margin-left: 12px;
  }
  h1 > span {
    font-size: 0.85em;
    color: ${colors.base.grayLight};
  }
`

export default () => (
  <Navigation>
    <LogoContainer>
      <Logo />
      <h1>
        COSMOS <span>v{version}</span>
      </h1>
    </LogoContainer>
    <ul>
      <li>
        <a href="/?url=docs">
          <Icon name="logs" color="grayLightest" size={20} />
          <span>Documentation</span>
        </a>
      </li>
      <li>
        <a href="/#/playground">
          <Icon name="code" color="grayLightest" size={16} />
          <span>Playground</span>
        </a>
      </li>
      <li>
        <a href="/sandbox" target="_blank">
          <Icon name="support" color="grayLightest" size={20} />
          <span>Stories</span>
        </a>
      </li>
      <li>
        <a href="/?url=manage/#/clients" target="_blank">
          <Icon name="clients" color="grayLightest" size={20} />
          <span>PoC</span>
        </a>
      </li>
      <li>
        <a href="/">
          <IconSketch />
          <span>UI Kit</span>
          <Label appearance="information">Soon</Label>
        </a>
      </li>

      <li>
        <a href="https://github.com/auth0/cosmos" target="_blank" rel="noopener noreferrer">
          <IconGithub />

          <span>Github</span>
        </a>
      </li>
    </ul>
  </Navigation>
)
