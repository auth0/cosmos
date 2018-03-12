import React from 'react'
import styled from 'styled-components'
import { colors } from 'auth0-cosmos/tokens'

const StyledAvatar = styled.span`
  width: 100%;
  height: 100%;
  background: ${colors.base.grayLightest};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  /* TODO: We should find a way to avoid fixed sizes here */
  & svg {
    height: 28px;
  }
`

const Avatar = props => <StyledAvatar>{props.image}</StyledAvatar>

export default Avatar
