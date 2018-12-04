import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

const imageFit = {
  'fill': 'fill',
  'contain': 'contain',
  'cover': 'cover',
  'none': 'none',
  'scale-down': 'scale-down'
}

const Image = props => {
  return (
    <Image.Element>
      <Image.Image src={props.source} alt={props.alt} {...props} />
      <figcaption>An elephant at sunset</figcaption>
    </Image.Element>
  )
}

Image.Element = styled.figure`
`

Image.Image = styled.img`  
  object-fit: ${props => imageFit[props.imageFit]};;
  height: 100%;
  width: 100%;
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



// .figure {
//   // Ensures the caption's text aligns with the image.
//   display: inline-block;
// }

// .figure-img {
//   margin-bottom: ($spacer / 2);
//   line-height: 1;
// }

// .figure-caption {
//   font-size: $figure-caption-font-size;
//   color: $figure-caption-color;
// }


// fit: PropTypes.oneOf([
//   'fill',
//   'contain',
//   'cover',
//   'none',
//   'scale-down'
// ]),
