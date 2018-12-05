import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

const imageFit = {
  fill: 'fill',
  contain: 'contain',
  cover: 'cover',
  none: 'none',
  'scale-down': 'scale-down'
}

const Image = props => <Image.Element src={props.source} alt={props.alt} {...props} />

Image.Element = styled.img`
  object-fit: ${props => imageFit[props.imageFit]};
  height: 100%;
  width: 100%;
`

Image.propTypes = {
  /** URL of the image */
  source: PropTypes.string.isRequired,
  /** Alt info for the image */
  alt: PropTypes.string,
  /** Sets how the image should be resized to fit its container. */
  imageFit: PropTypes.oneOf(['fill', 'contain', 'cover', 'none', 'scale-down'])
}

Image.defaultProps = {
  source: null,
  alt: null,
  imageFit: 'scale-down'
}

export default Image
