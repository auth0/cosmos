import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import containerStyles from "../../_helpers/container-styles";
import Form from "../../molecules/form";
import styled from "../../styled";
import { colors, fonts, spacing } from "../../tokens";

const CheckMark = styled.span``;
const Label = styled.div``;

const justifyContent = {
  horizontal: `margin-right: ${spacing.medium}`,
  vertical: `margin-bottom: ${spacing.xsmall}`
};

export interface ICheckboxProps {
  /** HTML ID of the checkbox */
  id?: string;
  /** The name of the checkbox */
  name: string;
  /** The value of the currently-selected option */
  selected?: string[];
  /** If true, all options in the group will be disabled */
  readOnly?: boolean;
  /** Callback function which is called when the user selects an option */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Label */
  children?: JSX.Element | JSX.Element[] | string;
  defaultChecked?: boolean;
  checked?: boolean;
  value?: any;
  align?: "vertical" | "horizontal";
}

const Checkbox = (props: ICheckboxProps) => (
  <Checkbox.Option readOnly={props.readOnly} {...Automation("checkbox")}>
    <Form.Field.ContextConsumer>
      {(context) => (
        <input
          id={props.id || context.formFieldId}
          type="checkbox"
          name={props.name}
          value={props.value}
          checked={props.checked}
          defaultChecked={props.defaultChecked}
          onChange={!props.readOnly ? props.onChange : undefined}
          readOnly={true}
          disabled={props.readOnly}
          {...Automation("checkbox.input")}
        />
      )}
    </Form.Field.ContextConsumer>
    <CheckMark />
    <Label>{props.children}</Label>
  </Checkbox.Option>
);

Checkbox.Option = styled.label`
  ${containerStyles};
  cursor: ${(props) => (props.readOnly ? "not-allowed" : "pointer")};
  display: flex;
  position: relative;

  margin-bottom: 0;
  font-weight: ${fonts.weight.normal};
  padding-left: ${spacing.medium};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  vertical-align: middle;

  input {
    position: absolute;
    opacity: 0;
  }

  ${CheckMark} {
    position: absolute;
    top: 0;
    left: 0;
    transform: translateY(20%);
    height: 16px;
    width: 16px;
    background-color: ${colors.radio.background};
    border: 1px solid ${colors.radio.border};
    box-shadow: inset 0 1px 2px 0 ${colors.radio.shadow};
    border-radius: 2px;
  }

  &:hover input ~ ${CheckMark} {
    box-shadow: inset 0 1px 4px 0 ${colors.radio.shadow};
  }

  input:checked ~ ${CheckMark} {
    background-color: ${(props) => (props.readOnly ? colors.base.gray : colors.radio.backgroundSelected)};
    border: 1px solid ${(props) => (props.readOnly ? colors.base.gray : colors.radio.borderSelected)};
  }

  input:focus ~ ${CheckMark} {
    box-shadow: inset 0 1px 4px 0 ${colors.radio.shadow}, 0 0 0 2px ${colors.base.blue};
  }

  ${CheckMark}:after {
    content: "";
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
`;

Checkbox.Element = styled.div`
  ${Checkbox.Option} {
    display: ${(props) => (props.align === "horizontal" ? "inline-block" : "table")};
    ${(props) => justifyContent[props.align]};

    &:last-child {
      margin: 0;
    }
  }
`;

export interface ICheckboxGroupProps {
  /** The direction in which the options should be laid out */
  align?: "horizontal" | "vertical";
  children?: JSX.Element | JSX.Element[];
  name?: string;
  selected?: any[];
  checked?: boolean;
  readOnly?: boolean;
  onChange?: Function;
}

const CheckboxGroup = (props: ICheckboxGroupProps) => (
  <Checkbox.Element {...props} {...Automation("checkbox.group")}>
    {React.Children.map(props.children, (child) => {
      if (!child) {
        return null;
      }

      const isReadOnly = props.readOnly || child.props.readOnly;

      return React.cloneElement(child, {
        name: props.name,
        defaultChecked: props.selected.indexOf(child.props.value) > -1,
        checked: props.checked,
        readOnly: isReadOnly,
        onChange: !isReadOnly ? props.onChange : undefined
      });
    })}
  </Checkbox.Element>
);

Checkbox.Group = CheckboxGroup;

// Backwards compatibility (will be removed in 1.0)
const StyledCheckbox = Checkbox.Element;
const StyledCheckboxOption = Checkbox.Option;

CheckboxGroup.defaultProps = {
  align: "vertical"
};

export default Checkbox;
export { StyledCheckbox, StyledCheckboxOption };
