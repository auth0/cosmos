import containerStyles from "../../_helpers/container-styles";
import styled from "../../styled";
import { colors, fonts, misc, spacing } from "../../tokens";

const config = {
  basic: {
    background: colors.input.background,
    border: colors.input.border,
    hoverBorder: colors.input.borderHover,
    focusBorder: colors.input.borderFocus,
    placeholder: colors.input.placeholder,
    cursor: "auto"
  },
  readOnly: {
    background: colors.input.backgroundReadOnly,
    border: colors.input.border,
    hoverBorder: colors.input.border,
    focusBorder: colors.input.border,
    placeholder: colors.input.placeholderReadOnly,
    cursor: "not-allowed"
  },
  error: {
    background: colors.input.background,
    border: colors.input.borderError,
    hoverBorder: colors.input.borderError,
    focusBorder: colors.input.borderError,
    placeholder: colors.input.placeholder,
    cursor: "auto"
  }
};

const getAttributes = (props) => {
  if (props.readOnly || props.disabled) {
    return config.readOnly;
  } else if (props.hasError || props.error) {
    return config.error;
  } else {
    return config.basic;
  }
};

const StyledInput = styled.input`
  ${containerStyles};
  width: 100%;
  box-sizing: border-box;

  background: ${(props) => getAttributes(props).background};
  border: 1px solid;
  border-color: ${(props) => getAttributes(props).border};
  border-radius: ${misc.radius};

  font-family: ${(props) => (props.code ? fonts.family.code : "inherit")};
  font-size: ${(props) => (props.code ? "13px" : "inherit")};
  color: ${colors.text.inputs};

  padding: ${misc.inputs.padding} ${spacing.small};

  cursor: ${(props) => getAttributes(props).cursor};
  transition: border-color ${misc.animationDuration}, box-shadow ${misc.animationDuration};

  &:hover {
    border-color: ${(props) => getAttributes(props).hoverBorder};
  }
  &:focus {
    border-color: ${(props) => getAttributes(props).focusBorder};
    box-shadow: 0px 0px 0 1px ${(props) => getAttributes(props).focusBorder};
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: ${(props) => getAttributes(props).placeholder};
  }
`;

export { StyledInput };
