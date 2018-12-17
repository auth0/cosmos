import React from 'react'
import styled, { css } from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

import Button from '../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../molecules/button-group'
import { multiply, add } from './pixel-calc'
import { spacing, misc } from '@auth0/cosmos-tokens'

/* TODO: width of button should be exported by button component */
const widthOfButton = '36px'

const Wrapper = styled.div`
  position: relative;

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

const getPaddingForActions = actions => {
  const numberOfActions = actions.length
  const spaceForActions = multiply(widthOfButton, numberOfActions)
  const buffer = spacing.xsmall
  const total = add(spaceForActions, buffer)
  return total
}

/**
 * Used when input can have actions attached
 */

const withActions = Component => props => {
  if (props.actions) {
    return (
      <Wrapper actions={props.actions} size={props.size}>
        <Component {...props} style={{ paddingRight: getPaddingForActions(props.actions) }} />
        <ButtonGroup compressed>
          {props.actions.map((action, index) => (
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
      </Wrapper>
    )
  } else {
    return <Component {...props} />
  }
}

export default withActions
