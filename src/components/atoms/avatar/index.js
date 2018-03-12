import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from 'auth0-cosmos-tokens'

const StyledAvatar = styled.span`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-color: ${props => props.backgroundColor};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Avatar = props => <StyledAvatar {...props}>{props.image}</StyledAvatar>

Avatar.propTypes = {
  /** Avatar size */
  size: PropTypes.number,
  /** Avatar background color */
  backgroundColor: PropTypes.string,
  /** Avatar image or symbol */
  image: PropTypes.string
}

Avatar.defaultProps = {
  size: 72,
  backgroundColor: '#F1F1F1',
  image: null
}

export default Avatar
