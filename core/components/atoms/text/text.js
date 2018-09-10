import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { colors, fonts } from '@auth0/cosmos-tokens'

const StyledTextSubdued = styled.span`
  color: ${colors.text.secondary};
  font-size: 13px;
  font-weight: ${fonts.weight.normal};
`

const StyledTextAllCaps = styled.span`
  font-size: 12px;
  color: ${colors.text.secondary};
  letter-spacing: 1px;
  text-transform: uppercase;
`

const Text = props => {
  if (props.type === 'subdued') {
    return <StyledTextSubdued {...props}>{props.children}</StyledTextSubdued>
  }
  if (props.type === 'allcaps') {
    return <StyledTextAllCaps {...props}>{props.children}</StyledTextAllCaps>
  }
  return props.children
}

Text.propTypes = {
  type: PropTypes.oneOf(['allcaps', 'subdued'])
}

Text.defaultProps = {}

export default Text
export { StyledTextAllCaps, StyledTextSubdued }
