import styled from 'styled-components'

import { fonts, colors } from 'auth0-cosmos-tokens'

const StyledLabel = styled.label`
  display: block;
  min-height: 44px;
  color: ${colors.text.default};
  font-weight: ${fonts.weight.medium};
  padding-top: 11px;
`

export default StyledLabel
