import React from 'react'
import styled from 'styled-components'

import { Logo } from '../components'

const StyledAvatar = styled.span`
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & g {
    fill: #a8a8a8;
  }
`

const Avatar = () => (
  <StyledAvatar>
    <Logo />
  </StyledAvatar>
)

export default Avatar
