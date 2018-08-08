import React from 'react'
import styled from 'styled-components'

import { Icon } from '@auth0/cosmos'
import { colors, spacing } from '@auth0/cosmos/tokens'
import IconSketch from './sketch-icon'

const Navigation = styled.nav`
  background-color: #222228;

  height: 95px;
  padding-right: ${spacing.xxlarge};

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-end;

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
    <ul>
      <li>
        <a href="/?url=docs">
          <Icon name="logs" color="grayLightest" size={20} />
          <span>Documentation</span>
        </a>
      </li>
      <li>
        <a href="/?url=manage/#/clients">
          <Icon name="clients" color="grayLightest" size={20} />
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
          <Icon name="extensions" color="grayLightest" size={20} />
          <span>Sandbox</span>
        </a>
      </li>
      <li>
        <a href="https://github.com/auth0/cosmos" target="_blank" rel="noopener noreferrer">
          <Icon name="code" color="grayLightest" size={20} />
          <span>Github</span>
        </a>
      </li>
    </ul>
  </Navigation>
)
