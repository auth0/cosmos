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
  display: block;
  height: ${props => props.height};
  width: ${props => props.width};
  max-width: 100%;
  object-fit: ${props => imageFit[props.fit]};
`

Image.propTypes = {
  /** URL of the image */
  source: PropTypes.string.isRequired,
  /** Alt text is mandatory, please read the accessibility section */
  alt: PropTypes.string,
  /** Image height, messured in pixels */
  height: PropTypes.number,
  /** Image width, messured in pixels */
  width: PropTypes.number,
  /** Sets how the content of the image is been resized to fit its container. */
  fit: PropTypes.oneOf(['none', 'fill', 'contain', 'cover', 'scale-down'])
}

Image.defaultProps = {
  source: null,
  alt: null,
  width: null,
  height: null,
  fit: 'none'
}

export default Image
