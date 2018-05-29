import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledImage = styled.img`
  user-select: none;
  pointer-events: none;
`

const Image = props => <StyledImage src={props.source} alt={props.alt} {...props} />

Image.propTypes = {
  /** URL of the image */
  source: PropTypes.string.isRequired,
  /** Alt info for the image */
  alt: PropTypes.string
}

Image.defaultProps = {
  source: null,
  alt: null
}

export default Image
