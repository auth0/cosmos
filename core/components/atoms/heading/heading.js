import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fonts } from '@auth0/cosmos-tokens'

const BaseHeading = styled.h1`
  margin: 1em 0;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.normal};
  line-height: 1.3;
`

const Heading = props => {
  const Component = Heading.Element[props.size]
  return <Component {...props}>{props.children}</Component>
}

Heading.Element = []

Heading.Element[1] = BaseHeading.withComponent('h1').extend`
  font-size: 36px;
`

Heading.Element[2] = BaseHeading.withComponent('h2').extend`
  font-size: 24px;
  font-weight: ${fonts.weight.medium};
`

Heading.Element[3] = BaseHeading.withComponent('h3').extend`
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

Heading.Element[4] = BaseHeading.withComponent('h4').extend`
  font-size: 14px;
  font-weight: ${fonts.weight.medium};
`

const StyledHeading = Heading.Element

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.string
}

Heading.defaultProps = {
  size: 1,
  children: null
}

export default Heading
export { StyledHeading, BaseHeading }
