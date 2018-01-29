import styled from 'styled-components'

import { fonts, spacing, colors } from '../../../tokens'

const StyledDivider = styled.div`
  text-align: left;
  display: block;
  letter-spacing: 0.5px;
  font-weight: ${fonts.weight.medium};
  border-bottom: 1px solid ${colors.form.divider};
  padding-bottom: ${spacing.xsmall};
  margin-bottom: ${spacing.large};
`

export default StyledDivider
