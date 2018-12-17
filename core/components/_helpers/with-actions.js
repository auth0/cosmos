import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

import Button from '../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../molecules/button-group'
import { multiply, add } from './pixel-calc'
import { spacing, misc } from '@auth0/cosmos-tokens'

/* TODO: width of button should be exported by button component */
const widthOfButton = '36px'

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

  ${StyledButtonGroup} {
    position: absolute;
    right: 4px;
    top: 0;

    ${Button.Element} {
      height: ${props => misc.input[props.size].height};
      margin: 0;
    }
  }
`

const getActions = ({ actions, size }) => {
  const Wrapper = props => (
    <StyledWrapper actions={actions} size={size}>
      {props.children}
    </StyledWrapper>
  )

  const Actions = (
    <ButtonGroup compressed>
      {actions.map((action, index) => (
        <Button
          appearance="link"
          size="small"
          key={index}
          icon={action.icon}
          onClick={action.handler}
          label={action.label}
        />
      ))}
    </ButtonGroup>
  )

  return { Wrapper, Actions }
}

export default getActions
