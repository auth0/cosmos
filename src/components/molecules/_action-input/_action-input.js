import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import TextInput from '../../atoms/text-input'
import Button from '../../atoms/button'
import ButtonGroup, { StyledButtonGroup } from '../../molecules/button-group'
import { multiply } from '../../_helpers/pixel-calc'
import { spacing } from '@auth0/cosmos-tokens'
import { __ICONNAMES__ } from '@auth0/cosmos/atoms/icon'

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
    top: 6px;
  }
`

/**
 * Used when input can have actions attached
 */

const ActionInput = props => {
  if (props.actions) {
    return (
      <Wrapper actions={props.actions}>
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
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(__ICONNAMES__).isRequired,
      handler: PropTypes.func.isRequired,
      label: PropTypes.string.isRequired
    })
  )
}

ActionInput.defaultProps = {
  ...TextInput.defaultProps,
  actions: []
}

export default ActionInput
