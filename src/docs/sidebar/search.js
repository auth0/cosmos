import React from 'react'
import styled from 'styled-components'

import { TextInput } from '../../components'
import { spacing, colors } from '../../tokens'

const StyledSearchBox = styled(TextInput)`
  border-radius: 0;
  border-right: none;
  border-left: none;
  padding: 14px ${spacing.medium};
  border-color: ${colors.base.grayLightest};
  &:hover  {
    border-color: ${colors.base.grayLightest};
  }
  &:focus {
    border-color: ${colors.base.grayLightest};
    box-shadow: none;
  }
`

const SearchBox = props => (
  <StyledSearchBox
    autoFocus
    placeholder="Search for a component..."
    onChange={e => props.onChange(e.target.value)}
  />
)

export default SearchBox
