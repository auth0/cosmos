import React from 'react'
import styled from '@auth0/cosmos/styled'
import { spacing, colors } from '@auth0/cosmos-tokens'
import Tag from '../../tag'
import Icon from '../../icon'

const StyledTag = styled(Tag)`
  margin-top: calc(${spacing.xxsmall} / 2);
  margin-bottom: calc(${spacing.xxsmall} / 2);
  margin-right: ${spacing.xxsmall};

  border-color: #dddddd;
  background-color: ${colors.base.blueLightest};
  color: #686868;

  ${Icon.Element} {
    stroke: ${colors.base.gray};
  }
`

export const CosmosMultiValue = optionProps => {
  const { innerProps, removeProps, innerRef, data } = optionProps
  return (
    <StyledTag {...innerProps} ref={innerRef} onRemove={removeProps.onClick}>
      {data.label}
    </StyledTag>
  )
}
