import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { misc, colors } from 'auth0-cosmos-tokens'

const sizeContent = {
  small: misc.avatar.small,
  medium: misc.avatar.medium,
  large: misc.avatar.large
}

const StyledThumbnail = styled.span`
  width: ${props => sizeContent[props.size]};
  height: ${props => sizeContent[props.size]};
  background-color: ${colors.base.grayLightest};
  border-radius: 3px;
  border: 1px solid ${colors.base.grayLight};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Thumbnail = props => <StyledThumbnail {...props}>{props.source}</StyledThumbnail>

Thumbnail.propTypes = {
  /** Thumbnail size */
  size: PropTypes.PropTypes.oneOf(['small', 'medium', 'large']),
  /** Thumbnail image or icon using its corresponding component */
  source: PropTypes.string
}

Thumbnail.defaultProps = {
  size: 'medium',
  source: null
}

export default Thumbnail
