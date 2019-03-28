import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import { spacing, colors } from '../../../tokens'

const selectOpacity = {
  default: 1,
  disabled: 0.5
}

const hoverBackgroundColor = '#F5F7F9'

export const optionRenderer = providedRenderer => optionProps => {
  const { innerProps, data } = optionProps

  const state = { isHovered: optionProps.isFocused, isDisabled: data.isDisabled }
  const boxContent = providedRenderer(data, state)

  return (
    <OptionElement noStyles={boxContent.props.noStyles} {...state} {...innerProps}>
      {boxContent}
    </OptionElement>
  )
}

export const Option = optionRenderer(data => <p>{data.label}</p>)

export const OptionElement = styled.div`
  background-color: ${props =>
    props.noStyles ? 'none' : props.isHovered ? hoverBackgroundColor : 'white'};
  display: flex;
  align-items: center;
  padding: ${props => (props.noStyles ? 'none' : `${spacing.xsmall} ${spacing.small}`)};
  color: ${colors.text.default};
  cursor: ${props => (props.isDisabled ? 'no-drop' : 'pointer')};
  opacity: ${props => (props.isDisabled ? selectOpacity.disabled : selectOpacity.default)};
`
