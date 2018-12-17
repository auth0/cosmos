import React from 'react'
import styled from '@auth0/cosmos/styled'

import { spacing, misc } from '@auth0/cosmos-tokens'
import { multiply, add } from '../../_helpers/pixel-calc'
import getActionGroup from '../../_helpers/action-group-creator'
import ButtonGroup from '../../molecules/button-group'
import Button from '../button'

/* TODO: width of button should be exported by button component */
const widthOfButton = '36px'

/* Calculate how much space should be left on the right for actions */
const getPaddingForActions = actions => {
  const numberOfActions = actions.length
  const spaceForActions = multiply(widthOfButton, numberOfActions)
  const buffer = spacing.xsmall
  const total = add(spaceForActions, buffer)
  return total
}

const StyledWrapper = styled.div`
  position: relative;

  input {
    padding-right: ${props => getPaddingForActions(props.actions)};
  }

  ${ButtonGroup.Element} {
    position: absolute;
    right: 4px;
    top: 0;

    ${Button.Element} {
      height: ${props => misc.input[props.size].height};
      margin: 0;
    }
  }
`

const InputWithActions = props => {
  const Actions = getActionGroup(props.actions)
  return (
    <StyledWrapper actions={props.actions} size={props.size}>
      {props.children} {Actions}
    </StyledWrapper>
  )
}

export default InputWithActions
