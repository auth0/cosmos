import styled from 'styled-components'

import { fonts, colors } from '../../../tokens'

const StyledLabel = styled.label`
  display: block;
  min-height: 44px;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.medium};
  text-align: right;
  padding-top: 13px;
  line-height: normal;
`

export default StyledLabel
