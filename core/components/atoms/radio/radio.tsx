import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import Form from "../../molecules/form";
import styled from "../../styled";
import { colors, spacing } from "../../tokens";

const CheckMark = styled.span``
const Label = styled.div``

const justifyContent = {
  horizontal: `margin-right: ${spacing.medium}`,
  vertical: `margin-bottom: ${spacing.xsmall}`
}

export interface IRadioProps {
  /** HTML ID of the component */
  id?: string
  /** The name of the radio */
  name: string
  /** The direction in which the options should be laid out */
  align?: 'horizontal' | 'vertical'
  /** The value of the currently-selected option */
  selected?: string
  /** If true all options in the group will be disabled */
  readOnly?: boolean
  /** Callback function which is called when the user selects an option */
  onChange?: Function
  children?: JSX.Element | JSX.Element[]
  onClick?: Function
}

const Radio = (props: IRadioProps) => (
  <Radio.Element {...props} {...Automation('radio')}>
    {React.Children.map(props.children, (child) => {
      if (!child) {
        return null
      }
      return React.cloneElement(child, {
        name: props.name,
        checked: props.selected === child.props.value,
        readOnly: props.readOnly || child.props.readOnly
      })
    })}
  </Radio.Element>
)

export interface IRadioOptionProps {
  id?: string
  value?: any
  readOnly?: boolean
  children: string | JSX.Element | JSX.Element[]
}

const RadioOption = ({ readOnly, children, ...props }: IRadioOptionProps) => (
  <RadioOption.Element readOnly={readOnly}>
    <Form.Field.ContextConsumer>
      {(context) => (
        <input
          id={props.id || context.formFieldId}
          {...Automation('radio.option')}
          type="radio"
          readOnly={true}
          {...props}
        />
      )}
    </Form.Field.ContextConsumer>

    <CheckMark />
    <Label>{children}</Label>
  </RadioOption.Element>
)

RadioOption.Element = styled.label`
  position: relative;
  cursor: pointer;
  padding-left: ${spacing.medium};
  user-select: none;
  vertical-align: middle;
  pointer-events: ${(props) => (props.readOnly ? 'none' : null)};

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  ${Label} {
    opacity: ${(props) => (props.readOnly ? 0.5 : null)};
  }

  ${CheckMark} {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(20%);
    height: 16px;
    width: 16px;
    background-color: ${(props) =>
      props.readOnly ? colors.radio.backgroundDisabled : colors.radio.background};
    border: 1px solid
      ${(props) => (props.readOnly ? colors.radio.borderDisabled : colors.radio.border)};
    box-shadow: inset 0 1px 2px 0
      ${(props) => (props.readOnly ? colors.radio.shadowDisabled : colors.radio.shadow)};
    border-radius: 50%;
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
    background-color: ${colors.base.white};
    width: 6px;
    height: 6px;
    border-radius: 50%;
    box-shadow: 0 1px 2px 0 ${colors.radio.shadow};
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

Radio.Option = RadioOption

Radio.Element = styled.div`
  ${Radio.Option.Element} {
    display: ${(props) => (props.align === 'horizontal' ? 'inline-block' : 'table')};
    ${(props) => justifyContent[props.align]};

    &:last-child {
      margin: 0;
    }
  }
`

Radio.defaultProps = {
  align: 'vertical'
}

const StyledRadio = Radio.Element
const StyledRadioOption = Radio.Option.Element

export default Radio
export { StyledRadio, StyledRadioOption }
