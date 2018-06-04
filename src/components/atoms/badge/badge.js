import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { colors, fonts } from '../../tokens'

const StyledBadge = styled.span`
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

const Badge = props => <StyledBadge {...props}>{props.children}</StyledBadge>

Badge.propTypes = {
  /** The visual style used to convey the label's purpose */
  appearance: PropTypes.oneOf(['default', 'information', 'success', 'warning', 'danger'])
}

Badge.defaultProps = {
  appearance: 'default'
}

export default Badge
export { StyledBadge }
