import React from 'react'
import PropTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import { colors, spacing, fonts } from '@auth0/cosmos-tokens'
import Automation from '../../_helpers/automation-attribute'
import containerStyles from '../../_helpers/container-styles'
import Form from '../../molecules/form'

const CheckMark = styled.span``
const Label = styled.div``

const justifyContent = {
  horizontal: `margin-right: ${spacing.medium}`,
  vertical: `margin-bottom: ${spacing.small}`
}

const Checkbox = props => (
  <Checkbox.Option readOnly={props.readOnly} {...Automation('checkbox')}>
    <Form.Field.ContextConsumer>
      {context => (
        <input
          id={props.id || context.formFieldId}
          type="checkbox"
          name={props.name}
          value={props.value}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          onChange={props.onChange}
          readOnly
          {...Automation('checkbox.input')}
        />
      )}
    </Form.Field.ContextConsumer>
    <CheckMark />
    <Label>{props.children}</Label>
  </Checkbox.Option>
)

Checkbox.Option = styled.label`
  ${containerStyles};

  display: flex;
  position: relative;
  cursor: pointer;
  margin-bottom: 0;
  font-weight: ${fonts.weight.normal};
  padding-left: ${spacing.medium};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;
  pointer-events: ${props => (props.readOnly ? 'none' : null)};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  ${Label} {
    opacity: ${props => (props.readOnly ? 0.5 : null)};
  }

  ${CheckMark} {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(20%);
    height: 16px;
    width: 16px;
    opacity: ${props => (props.readOnly ? 0.5 : null)};
    background-color: ${colors.radio.background};
    border: 1px solid ${colors.radio.border};
    box-shadow: inset 0 1px 2px 0 ${colors.radio.shadow};
    border-radius: 2px;
  }

  &:hover input ~ ${CheckMark} {
    box-shadow: inset 0 1px 4px 0 ${colors.radio.shadow};
  }

  input:checked ~ ${CheckMark} {
    background-color: ${colors.radio.backgroundSelected};
    border: 1px solid ${colors.radio.borderSelected};
  }

  input:focus ~ ${CheckMark} {
    box-shadow: inset 0 1px 4px 0 ${colors.radio.shadow}, 0 0 0 2px ${colors.base.blue};
  }

  ${CheckMark}:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ ${CheckMark}:after {
    display: block;
  }

  ${CheckMark}:after {
    box-sizing: content-box;
    width: 4px;
    height: 8px;
    border: solid ${colors.base.white};
    border-width: 0 2px 2px 0;
    transform: rotate(45deg) translate(-50%, -50%);
    left: 20%;
    top: 50%;
  }
`

Checkbox.Element = styled.div`
  ${Checkbox.Option} {
    display: ${props => (props.align === 'horizontal' ? 'inline-block' : 'table')};
    ${props => justifyContent[props.align]};

    &:last-child {
      margin: 0;
    }
  }
`

Checkbox.Group = props => (
  <Checkbox.Element {...props} {...Automation('checkbox.group')}>
    {React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        name: props.name,
        defaultChecked: props.selected.indexOf(child.props.value) > -1,
        checked: props.checked,
        readOnly: props.readOnly || child.props.readOnly,
        onChange: props.onChange
      })
    })}
  </Checkbox.Element>
)

// Backwards compatibility (will be removed in 1.0)
const StyledCheckbox = Checkbox.Element
const StyledCheckboxOption = Checkbox.Option

Checkbox.propTypes = {
  /** The name of the checkbox */
  name: PropTypes.string.isRequired,
  /** The value of the currently-selected option */
  selected: PropTypes.arrayOf(PropTypes.string),
  /** If true, all options in the group will be disabled */
  readOnly: PropTypes.bool,
  /** Callback function which is called when the user selects an option */
  onChange: PropTypes.func
}
Checkbox.Group.propTypes = {
  /** The direction in which the options should be laid out */
  align: PropTypes.oneOf(['horizontal', 'vertical'])
}

Checkbox.Group.defaultProps = {
  align: 'vertical'
}

export default Checkbox
export { StyledCheckbox, StyledCheckboxOption }
