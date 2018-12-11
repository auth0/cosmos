import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import { colors, fonts } from '@auth0/cosmos-tokens'

const Badge = props => <Badge.Element {...props}>{props.children}</Badge.Element>

Badge.Element = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};
  line-height: 1;
  color: #fff;
  padding: 4px 8px;
  background: ${props => colors.status[props.appearance]};
  border-radius: 21px;
`

// Backwards compatibility (will be removed in 1.0)
const StyledBadge = Badge.Element

Badge.propTypes = {
  /** The visual style used to convey the label's purpose */
  appearance: PropTypes.oneOf(['default', 'information', 'success', 'warning', 'danger'])
}

Badge.defaultProps = {
  appearance: 'default'
}

export default Badge
export { StyledBadge }
