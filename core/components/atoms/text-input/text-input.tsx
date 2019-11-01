import * as React from "react";
import styled from "../../styled";

import { misc } from "../../tokens";
import { StyledInput } from "../_styled-input";
import Automation from "../../_helpers/automation-attribute";
import InputWithActions from "../_input-with-actions";
import Form from "../../molecules/form";
import { ActionWithIcon } from "../../_helpers/action-shape";

export type TextInputSize = "default" | "large" | "small" | "compressed";

export interface ITextInputProps {
  /** HTML ID for the element */
  id?: string;
  /** HTML name for the element */
  name?: string;
  /** Hide input similar to passwords but for other private information. Implies readOnly. */
  masked?: boolean;
  /** Make input readOnly if it does not validate constraint */
  readOnly?: boolean;
  /** Use when the expected input is code */
  code?: boolean;
  /** Pass hasError to show error state */
  hasError?: boolean;
  /** @deprecated:hasError Pass error string directly to show error state */
  error?: string;
  /** onChange transparently passed to the input */
  onChange?: Function;
  /** Text to display when the input is empty */
  placeholder?: string;
  /** The default value for the field */
  defaultValue?: string;
  /** The current value for the field */
  value?: string;
  /** The (HTML) type for the input. */
  type?: string;
  /** The size of the input. */
  size?: TextInputSize;
  /** The (HTML) label for the input. */
  label?: string;
  /** Actions to be attached to the input */
  actions?: Array<React.ReactNode | ActionWithIcon>;
  onClick?: Function;
  onBlur?: Function;
  onFocus?: Function;
  /** Native HTML pattern property, accepts a regular expression to validate the input */
  pattern?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
  autoFocus?: boolean;
  autoComplete?: string;
  autoCorrect?: string;
  spellCheck?: boolean;
}

const TextInput = (props: ITextInputProps) => {
  let { defaultValue, placeholder, readOnly, ...restOfTheProps } = props;

  /*
    override placeholder and readOnly for masked

    masked is like a readOnly field but with the values replaced with *
    (like password, but without the value underneath)
  */
  if (props.masked) {
    const length = props.defaultValue ? props.defaultValue.length : 8;
    placeholder = new Array(length).join("•");
    readOnly = true;
    defaultValue = null;
  }

  /*
    the input element can get it's id from multiple sources
    1. the user might provide it on the element
    2. if this element is part of a form field, the field will pass one

    the user's id takes preference over the field's
  */

  const Input = (
    <Form.Field.ContextConsumer>
      {(context) => (
        <TextInput.Element
          {...Automation("text-input")}
          id={props.id || context.formFieldId}
          defaultValue={defaultValue}
          placeholder={placeholder}
          readOnly={readOnly}
          {...restOfTheProps}
        />
      )}
    </Form.Field.ContextConsumer>
  );

  if (!props.actions.length) {
    return Input;
  } else {
    /* Input is not a component, just JSX, hence wrapper in {} */
    return (
      <InputWithActions actions={props.actions} size={props.size}>
        {Input}
      </InputWithActions>
    );
  }
};

TextInput.Element = styled(StyledInput)`
  height: ${(props) => misc.input[props.size].height};
`;

TextInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null,
  type: "text",
  size: "default",
  actions: [],
};

export default TextInput;
export { StyledInput };
