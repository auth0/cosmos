import React from 'react'
import styled from 'styled-components'

const StyledAvatar = styled.span`
  width: 100%;
  height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 3px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    height: 32px;
  }
`

const Avatar = props => <StyledAvatar>{props.image}</StyledAvatar>

export default Avatar
