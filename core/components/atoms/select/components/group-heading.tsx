import * as React from 'react'
import { components } from 'react-select'
import styled from '@auth0/cosmos/styled'
import { spacing, fonts } from '@auth0/cosmos-tokens'

const isFirstGroup = (text, options) => text === options[0].label

export const GroupHeading = props => {
  const isFirst = isFirstGroup(props.children, props.selectProps.options)
  return (
    <GroupHeading.Element>
      {!isFirst && <Divider />}
      <components.GroupHeading {...props} />
    </GroupHeading.Element>
  )
}

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #e8e8e8;
  margin-top: ${spacing.xsmall};
  margin-bottom: ${spacing.xsmall};
`

GroupHeading.Element = styled.div`
  font-size: 13px;
  font-weight: ${fonts.weight.medium};
  letter-spacing: 1px;
`

GroupHeading.theme = provided => ({
  ...provided,
  paddingLeft: spacing.small,
  paddingRight: spacing.small,
  paddingTop: spacing.xsmall,
  paddingBottom: spacing.xxsmall
})
