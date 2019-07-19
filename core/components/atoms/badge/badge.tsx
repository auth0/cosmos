import * as React from 'react'
import styled from '../../styled'
import { colors, fonts } from '../../tokens'
import Automation from '../../_helpers/automation-attribute'

export interface IBadgeProps {
  /** HTML ID of the component */
  id?: string
  appearance?: 'default' | 'information' | 'success' | 'warning' | 'danger'
  children?: React.ReactNode
  onClick?: Function
}

const Badge = (props: IBadgeProps) => (
  <Badge.Element {...Automation('badge')} {...props}>
    {props.children}
  </Badge.Element>
)

Badge.Element = styled.span`
  display: inline-block;
  vertical-align: middle;
  font-size: 13px;
  font-weight: ${fonts.weight.medium};
  line-height: 1;
  color: #fff;
  padding: 4px 8px;
  background: ${(props) => colors.status[props.appearance]};
  border-radius: 21px;
`

// Backwards compatibility (will be removed in 1.0)
const StyledBadge = Badge.Element

Badge.defaultProps = {
  appearance: 'default'
}

export default Badge
export { StyledBadge }
