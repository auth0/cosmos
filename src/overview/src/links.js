import React from 'react'
import styled from 'styled-components'

import { Icon } from '../../components'

const Links = styled.div`
  text-align: right;
  a {
    margin-left: 20px;
    text-decoration: none;
  }
  i {
    font-size: 26px;
    color: #333;
  }
`

export default () => (
  <Links>
    <a href="/docs">
      <img alt="docs" src="/docs.png" />
    </a>
    <a href="/manage/">
      <Icon type="clients" />
    </a>
    <a href="https://github.com/auth0/cosmos" target="_blank" rel="noopener noreferrer">
      <img alt="github" src="/github.png" />
    </a>
  </Links>
)
