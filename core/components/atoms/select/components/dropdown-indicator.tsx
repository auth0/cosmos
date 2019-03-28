import * as React from 'react'
import { spacing } from '@auth0/cosmos-tokens'
import styled from '@auth0/cosmos/styled'
import Icon from '../../icon'

const StyledArrowIcon = styled(Icon)`
  pointer-events: none;
  margin-right: ${spacing.unit * 3}px;

  svg {
    display: block;
  }
`

export const DropdownIndicator = ({ innerProps }) => (
  <StyledArrowIcon {...innerProps} name="dropdown-fill" size="14" color="default" />
)
