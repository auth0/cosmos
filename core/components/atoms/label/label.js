import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import { StyledTextAllCaps } from '@auth0/cosmos/atoms/text'
import { colors, misc } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'

const Label = props => (
  <Label.Element {...Automation('label')} {...props}>
    {props.children}
  </Label.Element>
)

Label.Element = styled(StyledTextAllCaps)`
  font-size: 11px;
  color: ${props => colors.status[props.appearance]};
  padding: 2px 6px;
  border: 1px solid ${props => colors.status[props.appearance]};
  border-radius: ${misc.radius};
  line-height: 1.2;
`

const StyledLabel = Label.Element

Label.propTypes = {
  /** The visual style used to convey the label's purpose */
  appearance: PropTypes.oneOf(['default', 'information', 'success', 'warning', 'danger'])
}

Label.defaultProps = {
  appearance: 'default'
}

export default Label
export { StyledLabel }
