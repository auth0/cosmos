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

const StyledHeading = []

StyledHeading[1] = styled(BaseHeading.withComponent('h1'))`
  font-size: 36px;
`

StyledHeading[2] = styled(BaseHeading.withComponent('h2'))`
  font-size: 24px;
  font-weight: ${fonts.weight.medium};
`

StyledHeading[3] = styled(BaseHeading.withComponent('h3'))`
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

StyledHeading[4] = styled(BaseHeading.withComponent('h4'))`
  font-size: 14px;
  font-weight: ${fonts.weight.medium};
`

const Heading = props => {
  const Component = StyledHeading[props.size]
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
export { StyledHeading }
