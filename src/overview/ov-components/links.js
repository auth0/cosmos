import React from 'react'
import styled from 'styled-components'

import { Icon } from '../../components'

const Links = styled.div`
  text-align: right;

  a {
    margin-left: 20px;
    display: inline-block;
    vertical-align: middle;
    text-decoration: none;
  }
  i {
    font-size: 24px;
    color: #333;
  }
`

export default () => (
  <Links>
    <a href="/docs">
      <img alt="docs" src="/docs.png" />
    </a>
    <a href="/clients">
      <Icon name="clients" size={30} />
    </a>
    <a href="/is-cosmos-ready-yet">
      <Icon name="hourglass" size={30} />
    </a>
    <a href="https://github.com/auth0/cosmos" target="_blank" rel="noopener noreferrer">
      <img alt="github" src="/github.png" />
    </a>
  </Links>
)
