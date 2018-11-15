import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, fonts } from '@auth0/cosmos-tokens'

const Text = props => {
  if (props.type === 'subdued') {
    return <Text.Subdued {...props}>{props.children}</Text.Subdued>
  }
  if (props.type === 'allcaps') {
    return <Text.AllCaps {...props}>{props.children}</Text.AllCaps>
  }
  if (props.type === 'strong') {
    return <Text.Strong {...props}>{props.children}</Text.Strong>
  }
  return props.children
}

Text.Subdued = styled.span`
  color: ${colors.text.secondary};
  font-size: 13px;
  font-weight: ${fonts.weight.normal};
`

Text.AllCaps = styled.span`
  font-size: 12px;
  color: ${colors.text.secondary};
  letter-spacing: 1px;
  text-transform: uppercase;
`

Text.Strong = styled.strong`
  font-weight: ${fonts.weight.bold};
`

Text.propTypes = {
  type: PropTypes.oneOf(['allcaps', 'subdued', 'strong'])
}

Text.defaultProps = {}

export default Text
export { StyledTextAllCaps, StyledTextSubdued, Strong }
