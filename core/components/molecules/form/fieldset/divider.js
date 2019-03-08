import React from 'react'
import styled from '@auth0/cosmos/styled'

import { fonts, spacing, colors } from '@auth0/cosmos-tokens'

const Divider = props => <Divider.Element {...props} />

Divider.Element = styled.legend`
  font-size: 14px;
  letter-spacing: 0.5px;
  font-weight: ${fonts.weight.medium};
  border-bottom: 1px solid ${colors.form.divider};
  padding-bottom: ${spacing.xsmall};
  margin-bottom: ${spacing.large};
  margin-top: 0;
  width: 100%;
  color: ${colors.text.default};
`

export default Divider
