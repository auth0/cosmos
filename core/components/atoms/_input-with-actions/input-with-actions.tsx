import * as React from 'react'
import styled from '../../styled'

import { spacing, misc } from '@auth0/cosmos-tokens'

import ButtonGroup from '../../molecules/button-group'
import Button from '../button'

import getActionGroup, { IObjectAction } from '../../_helpers/action-group-creator'
import { multiply, add } from '../../_helpers/pixel-calc'

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

  input,
  textarea {
    padding-right: ${props => getPaddingForActions(props.actions)};
  }

  ${ButtonGroup.Element} {
    position: absolute;
    right: 4px;
    top: 0;

    ${Button.Element} {
      height: ${props => misc.input[props.size || 'default'].height};
      margin: 0;
    }
  }
`

/* Override appearance and size of actions */
const actionOverrides: Partial<IObjectAction> = { appearance: 'link', size: 'small' }

const InputWithActions = props => {
  const Actions = getActionGroup(props.actions, actionOverrides)

  return (
    <StyledWrapper actions={props.actions} size={props.size}>
      {props.children} {Actions}
    </StyledWrapper>
  )
}

export default InputWithActions
