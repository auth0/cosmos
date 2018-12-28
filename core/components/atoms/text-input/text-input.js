import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'

import { misc } from '@auth0/cosmos-tokens'
import { StyledInput } from '../_styled-input'

/* Helpers */
import Automation from '../../_helpers/automation-attribute'
import { deprecate } from '../../_helpers/custom-validations'

/* Input with actions */
import InputWithActions from '../_input-with-actions'
import { actionShapeWithRequiredIcon } from '../../_helpers/action-shape'

const TextInput = props => {
  let { defaultValue, placeholder, readOnly, ...restOfTheProps } = props

  /*
    override placeholder and readOnly for masked

    masked is like a readOnly field but with the values replaced with *
    (like password, but without the value underneath)
  */
  if (props.masked) {
    const length = props.defaultValue ? props.defaultValue.length : 8
    placeholder = new Array(length).join('•')
    readOnly = true
    defaultValue = null
  }

  const Input = (
    <TextInput.Element
      {...Automation('text-input')}
      defaultValue={defaultValue}
      placeholder={placeholder}
      readOnly={readOnly}
      {...restOfTheProps}
    />
  )

  if (!props.actions.length) return Input
  else {
    /* Input is not a component, just JSX, hence wrapper in {} */
    return (
      <InputWithActions actions={props.actions} size={props.size}>
        {Input}
      </InputWithActions>
    )
  }
}

TextInput.Element = styled(StyledInput)`
  height: ${props => misc.input[props.size].height};
`

TextInput.propTypes = {
  /** Hide input, similar to passwords but for other private information. Implies readOnly. */
  masked: PropTypes.bool,
  /** Make input readOnly if it does not validate constraint */
  readOnly: PropTypes.bool,
  /** Use when the expected input is code */
  code: PropTypes.bool,
  /** Pass hasError to show error state */
  hasError: PropTypes.bool,
  /** @deprecated Pass error string directly to show error state */
  error: PropTypes.string,
  /** onChange transparently passed to the input */
  onChange: PropTypes.func,
  /** Text to display when the input is empty */
  placeholder: PropTypes.string,
  /** The default value for the field */
  defaultValue: PropTypes.string,
  /** The (HTML) type for the input. */
  type: PropTypes.string,
  /** The size of the input. */
  size: PropTypes.oneOf(['default', 'large', 'small', 'compressed']),
  /** Actions to be attached to the input */
  actions: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(actionShapeWithRequiredIcon)
  ]),

  /** deprecate error string prop */
  _error: props => deprecate(props, { name: 'error', replacement: 'hasError' })
}

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null,
  type: 'text',
  size: 'default',
  actions: []
}

export default TextInput
export { StyledInput }
