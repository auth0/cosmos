import React from 'react'
import styled from 'styled-components'

const Links = styled.div`
  text-align: right;
  a {
    margin-left: 20px;
  }
`

export default () => (
  <Links>
    <a href="/styleguide/">
      <img alt="docs" src="/docs.png" />
    </a>
    <a href="https://github.com/auth0/cosmos" target="_blank" rel="noopener noreferrer">
      <img alt="github" src="/github.png" />
    </a>
  </Links>
)
