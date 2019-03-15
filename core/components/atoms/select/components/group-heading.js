import React from 'react'
import { components } from 'react-select'
import styled, { css } from '@auth0/cosmos/styled'
import { spacing } from '@auth0/cosmos-tokens'

const isFirstGroup = (text, options) => text === options[0].label

export const CosmosGroupHeading = props => (
  <CosmosGroupHeading.Element isFirst={isFirstGroup(props.children, props.selectProps.options)}>
    <components.GroupHeading {...props} />
  </CosmosGroupHeading.Element>
)

CosmosGroupHeading.Element = styled.div`
  border-top: ${props => (props.isFirst ? null : css`1px solid #e8e8e8`)};

  padding-top: ${spacing.xsmall};

  margin-top: -${spacing.xsmall};
  margin-bottom: ${spacing.xsmall};

  font-size: 12px;
`

CosmosGroupHeading.theme = provided => ({
  ...provided,
  paddingLeft: spacing.small,
  paddingRight: spacing.small
})
