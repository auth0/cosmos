import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from 'auth0-cosmos/tokens'

const StyledAvatar = styled.span`
  width: ${props => props.size};
  height: ${props => props.size};
  background: ${props => props.color};
  border-radius: 50%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Avatar = props => <StyledAvatar>{props.image}</StyledAvatar>

Avatar.propTypes = {
  /** Avatar size */
  size: PropTypes.number,
  /** Avatar background color */
  color: PropTypes.string,
  /** Avatar image or symbol */
  image: PropTypes.string
}

Avatar.defaultProps = {
  size: 48,
  color: colors.base.grayLightest,
  image: null
}

export default Avatar
