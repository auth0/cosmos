import styled from 'styled-components'

import { fonts, spacing, colors } from '../../../../tokens'
import StyledLabel from '../label'

const StyledDivider = styled(StyledLabel)`
  text-transform: uppercase;
  text-align: left;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: ${fonts.weight.medium};
  border-bottom: 1px solid ${colors.form.divider};
  padding-bottom: ${spacing.xsmall};
  margin-bottom: ${spacing.large};
  width: 100%;
`

export default StyledDivider
