import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Image } from '@auth0/cosmos'
import { misc, colors } from '@auth0/cosmos-tokens'

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

const Thumbnail = props => {
  let image

  if (typeof props.source === 'string') image = <Image source={props.source} />
  else image = props.source

  return <StyledThumbnail {...props}>{image}</StyledThumbnail>
}

Thumbnail.propTypes = {
  /** Thumbnail size */
  size: PropTypes.PropTypes.oneOf(['small', 'medium', 'large']),
  /** An image URL, an Image component, or an Icon component to display */
  source: PropTypes.node
}

Thumbnail.defaultProps = {
  size: 'medium',
  source: null
}

export default Thumbnail
