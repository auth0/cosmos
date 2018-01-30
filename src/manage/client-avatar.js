import React from 'react'
import styled from 'styled-components'

import { Logo } from '../components'

const StyledAvatar = styled.span`
  background: rgba(256, 0, 0, 0.2);
  border: 1px solid #d9d9d9;
  display: inline-block;
  width: 48px;
  height: 48px;
  border-radius: 3px;
  margin-right: 10px;
  text-align: center;
  line-height: 72px;
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
