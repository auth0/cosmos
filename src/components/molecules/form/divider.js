import styled from 'styled-components'

import { fonts, spacing, colors } from '../../../tokens'
import StyledLabel from './label'

const StyledDivider = styled(StyledLabel)`
  text-transform: uppercase;
  text-align: left;
  font-size: 13px;
  letter-spacing: 1px;
  font-weight: ${fonts.weight.medium};
  border-bottom: 1px solid ${colors.grayLight};
  padding-bottom: ${spacing.xsmall};
  margin-bottom: ${spacing.xlarge};
`

export default StyledDivider
