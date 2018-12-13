import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

const Image = props => <Image.Element src={props.source} alt={props.alt} {...props} />

Image.Element = styled.img`
  height: auto;
  max-width: 100%;
`

Image.propTypes = {
  /** URL of the image */
  source: PropTypes.string.isRequired,
  /** Alt text is mandatory, please read the accessibility section */
  alt: PropTypes.string
}

Image.defaultProps = {
  source: null,
  alt: null
}

export default Image
