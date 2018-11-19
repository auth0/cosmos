import React from 'react'
import PropTypes from 'prop-types'

import { misc } from '@auth0/cosmos-tokens'
import { StyledInput, Input, InputGroup } from '../_styled-input'
import { deprecate } from '../../_helpers/custom-validations'
import Automation from '../../_helpers/automation-attribute'

const TextInput = ({ defaultValue, type, ...props }) => {
  if (this.props.append != null) {
    if (props.masked) {
      const length = defaultValue ? defaultValue.length : 8
      const maskedValue = new Array(length).join('•')
      return (
        <Input>
          <TextInput.Element
            type={type}
            {...props}
            placeholder={maskedValue}
            readOnly
            {...Automation('text-input')}
          />
          <InputGroup>{this.props.append}</InputGroup>
        </Input>
      )
    }
    return (
      <Input>
        <TextInput.Element
          {...Automation('text-input')}
          type={type}
          defaultValue={defaultValue}
          {...props}
        />
        <InputGroup>{this.props.append}</InputGroup>
      </Input>
    )
  } else if (this.props.prepend != null) {
    if (props.masked) {
      const length = defaultValue ? defaultValue.length : 8
      const maskedValue = new Array(length).join('•')
      return (
        <Input>
          <InputGroup>{this.props.prepend}</InputGroup>
          <TextInput.Element
            type={type}
            {...props}
            placeholder={maskedValue}
            readOnly
            {...Automation('text-input')}
          />
        </Input>
      )
    }
    return (
      <Input>
        <InputGroup>{this.props.prepend}</InputGroup>
        <TextInput.Element
          {...Automation('text-input')}
          type={type}
          defaultValue={defaultValue}
          {...props}
        />
      </Input>
    )
  }

  return (
    <TextInput.Element
      {...Automation('text-input')}
      type={type}
      defaultValue={defaultValue}
      {...props}
    />
  )
}

TextInput.Element = StyledInput.extend`
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
  /** Prepend context to Text Input */
  prepend: PropTypes.string,
  /** Append context to Text Input */
  append: PropTypes.string,

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
  prepend: 'null',
  append: 'null'
}

export default TextInput
export { StyledInput }
