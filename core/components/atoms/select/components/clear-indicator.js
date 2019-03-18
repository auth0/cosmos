import React from 'react'
import { components } from 'react-select'
import { spacing } from '@auth0/cosmos-tokens'
import styled from '@auth0/cosmos/styled'
import Icon from '../../icon'

const StyledCloseIcon = styled(Icon)`
  pointer-events: none;
  margin-right: ${spacing.unit}px;

  svg {
    display: block;
  }
`

export const CosmosClearIndicator = props => (
  <components.ClearIndicator {...props}>
    <StyledCloseIcon name="close" size="14" color="default" />
  </components.ClearIndicator>
)
