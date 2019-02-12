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
  const element = props.as || 'h' + props.size

  const Component = Heading.Element[props.size].withComponent(element)

  return (
    <Component {...Automation('heading')} {...props}>
      {props.children}
    </Component>
  )
}

Heading.Element = []

Heading.Element[1] = styled(BaseHeading)`
  font-size: 36px;
`

Heading.Element[2] = styled(BaseHeading)`
  font-size: 24px;
  font-weight: ${fonts.weight.medium};
`

Heading.Element[3] = styled(BaseHeading)`
  font-size: 18px; /* TO-DO: tokenize */
  font-weight: ${fonts.weight.bold};
`

Heading.Element[4] = styled(BaseHeading)`
  font-size: 14px;
  font-weight: ${fonts.weight.medium};
`

const StyledHeading = Heading.Element

Heading.propTypes = {
  /** Size of the heading */
  size: PropTypes.oneOf([1, 2, 3, 4]),
  /** h element to use instead of default one */
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  /** Successful state when action is completed successfuly */
  children: PropTypes.string
}

Heading.defaultProps = {
  size: 1,
  children: null
}

export default Heading
export { StyledHeading, BaseHeading }
