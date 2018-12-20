import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'
import Automation from '../../_helpers/automation-attribute'

const Image = props => <Image.Element src={props.source} {...Automation('image')} {...props} />

Image.Element = styled.img`
  user-select: none;
  pointer-events: none;
`

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
