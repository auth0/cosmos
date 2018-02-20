import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fonts } from '../../../tokens'

const StyledHeading = styled.h1`
  margin: 1em 0;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.normal};
  line-height: 1.3;
`

const H = []

H[1] = StyledHeading.withComponent('h1').extend`
  font-size: 36px;
`

H[2] = StyledHeading.withComponent('h2').extend`
  font-size: 24px;
  font-weight: ${fonts.weight.medium};
`

H[3] = StyledHeading.withComponent('h3').extend`
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

H[4] = StyledHeading.withComponent('h4').extend`
  font-size: 14px;
  font-weight: ${fonts.weight.medium};
`

const Heading = props => {
  const Component = H[props.size]
  return <Component {...props}>{props.children}</Component>
}

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.string
}

Heading.defaultProps = {
  size: 1,
  children: null
}

export default Heading
