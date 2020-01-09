import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import Form from "../../molecules/form";
import styled from "../../styled";
import { colors, misc, spacing } from "../../tokens";
import { StyledInput } from "../_styled-input";
import Icon from "../icon";
import { ISelectOptions } from "../select/interfaces";

const selectOpacity = {
  default: 1,
  disabled: 0.5,
};

const PLACEHOLDER_VALUE = "0";

const valueIsUndefined = (value) => value === undefined || value === null;

const isGroup = (option) => option.groupName && option.items;
const renderOption = (option, idx) => {
  if (isGroup(option)) {
    return (
      <optgroup key={idx} label={option.groupName} {...Automation("select.optgroup")}>
        {option.items.map(renderOption)}
      </optgroup>
    );
  }

  return (
    <option key={idx} value={option.value} disabled={option.disabled} {...Automation("select.option")}>
      {option.text}
    </option>
  );
};

export interface ISimpleSelectProps {
  /** HTML ID of the component */
  id?: string;
  /** Options to render inside select */
  options?: ISelectOptions;
  /** Value selected by default */
  value?: any;
  /** Default value selected by default */
  defaultValue?: any;
  /** onChange transparently passed to select */
  onChange?: Function;
  /** String to show when the first empty choice is selected */
  placeholder?: string;
  /** Determines if the select should be disabled */
  disabled?: boolean;
}

const SimpleSelect = ({ options, ...props }: ISimpleSelectProps) => {
  /*
    select boxes do not support readonly like input boxes,
    but they do have disabled. we need the style of readOnly input
    and functionality of select disabled
  */

  const shouldUsePlaceholder = valueIsUndefined(props.value) && valueIsUndefined(props.defaultValue);
  if (shouldUsePlaceholder) {
    props.value = PLACEHOLDER_VALUE;
  }

  return (
    <SimpleSelect.Wrapper>
      <SimpleSelect.ArrowIcon name="dropdown-fill" size="14" color="default" />
      <Form.Field.ContextConsumer>
        {(context) => (
          <SimpleSelect.Element id={props.id || context.formFieldId} {...Automation("select")} {...props}>
            {/* First option will be selected if there is no value passed as a prop */}
            {props.placeholder && (
              <option disabled={true} value={PLACEHOLDER_VALUE} {...Automation("select.option")}>
                {props.placeholder}
              </option>
            )}

            {options.map(renderOption)}
          </SimpleSelect.Element>
        )}
      </Form.Field.ContextConsumer>
    </SimpleSelect.Wrapper>
  );
};

SimpleSelect.Element = styled(StyledInput.withComponent("select"))`
  appearance: none;

  padding-right: ${spacing.large};

  height: ${misc.input.default.height};
  opacity: ${(props) => (props.disabled ? selectOpacity.disabled : selectOpacity.default)};
  background-color: ${(props) => (props.disabled ? colors.input.backgroundReadOnly : colors.input.background)};
`;

SimpleSelect.Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

SimpleSelect.ArrowIcon = styled(Icon)`
  position: absolute;
  right: 12px;
  pointer-events: none;

  svg {
    display: block;
  }
`;

SimpleSelect.defaultProps = {
  options: [],
  placeholder: "",
};

export default SimpleSelect;
