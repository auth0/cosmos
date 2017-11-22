import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background: #c1ffe8;
  text-align: center;
  padding: ${props => (props.condensed ? '50px 0' : '50px')};
  > img {
    height: ${props => (props.condensed ? '50px' : '150px')};
  }
`

export default props =>
  <Header condensed={props.condensed}>
    <img src="logo.png" alt="logo" />
  </Header>
