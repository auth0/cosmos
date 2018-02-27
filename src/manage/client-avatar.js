import React from 'react'
import styled from 'styled-components'
import { colors } from '../tokens'

const StyledAvatar = styled.span`
  width: 100%;
  height: 100%;
  background: ${colors.base.grayLightest};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: 28px;
  }
`

const Avatar = props => <StyledAvatar>{props.image}</StyledAvatar>

export default Avatar
