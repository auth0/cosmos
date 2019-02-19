import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import { colors, fonts } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

const BaseHeading = styled.h1`
  margin: 1em 0;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.normal};
  line-height: 1.3;
`

const Heading = props => {
  const Component = Heading.Element[props.size]
  return (
    <Component {...Automation('heading')} {...props}>
      {props.children}
    </Component>
  )
}

Heading.Element = []

Heading.Element[1] = styled(BaseHeading.withComponent('h1'))`
  font-size: 36px;
`

Heading.Element[2] = styled(BaseHeading.withComponent('h2'))`
  font-size: 24px;
  font-weight: ${fonts.weight.medium};
`

Heading.Element[3] = styled(BaseHeading.withComponent('h3'))`
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

Heading.Element[4] = styled(BaseHeading.withComponent('h4'))`
  font-size: 14px;
  font-weight: ${fonts.weight.medium};
`

const StyledHeading = Heading.Element

Heading.propTypes = {
  size: PropTypes.oneOf([1, 2, 3, 4]),
  children: PropTypes.element
}

Heading.defaultProps = {
  size: 1,
  children: null
}

export default Heading
export { StyledHeading, BaseHeading }
