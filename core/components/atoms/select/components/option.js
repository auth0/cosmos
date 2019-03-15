import React from 'react'
import styled from '@auth0/cosmos/styled'
import { spacing } from '../../../tokens'

const selectOpacity = {
  default: 1,
  disabled: 0.5
}

const optionRenderer = providedRenderer => optionProps => {
  const { innerProps, innerRef, data } = optionProps
  const ifDisabled = (disabledValue, enabledValue) =>
    data.isDisabled ? disabledValue : enabledValue

  const state = { isHovered: optionProps.isFocused }
  const opacity = selectOpacity[ifDisabled('disabled', 'default')]
  const cursor = ifDisabled('no-drop', 'pointer')

  const style = { width: '100%', opacity, cursor }

  return (
    <div ref={innerRef} {...innerProps} style={style}>
      {providedRenderer(data, state)}
    </div>
  )
}

export const CosmosOption = optionRenderer((data, state) => (
  <CosmosOption.Element {...state}>
    <p>{data.label}</p>
  </CosmosOption.Element>
))

CosmosOption.Element = styled.div`
  background-color: ${props => (props.isHovered ? '#F5F7F9' : 'white')};
  min-height: 39px;
  display: flex;
  align-items: center;
  padding: 0 ${spacing.small};
`

CosmosOption.renderer = optionRenderer
