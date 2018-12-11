import React from 'react'
import styled from '@auth0/cosmos/styled'
import PropTypes from 'prop-types'

import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'
import { multiply } from '../../_helpers/pixel-calc'
import { spacing, misc } from '@auth0/cosmos-tokens'
import { actionShape } from '@auth0/cosmos/_helpers/action-shape'

/* TODO: width of button should be exported by button component */
const widthOfButton = '36px'

const Wrapper = styled.div`
  position: relative;
  ${TextInput.Element} {
    ${props => {
      if (!props.actions) return
      return `padding-right: calc(${multiply(widthOfButton, props.actions.length)} + ${
        spacing.xsmall
      })`
    }};
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

/**
 * Used when input can have actions attached
 */

const ActionInput = props => {
  if (props.actions) {
    return (
      <Wrapper actions={props.actions} size={props.size}>
        <TextInput {...props} />
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
    return <TextInput {...props} />
  }
}

ActionInput.propTypes = {
  ...TextInput.propTypes,
  /** Actions to be attached to input */
  actions: PropTypes.arrayOf(actionShape)
}

ActionInput.defaultProps = {
  ...TextInput.defaultProps,
  actions: []
}

export default ActionInput
