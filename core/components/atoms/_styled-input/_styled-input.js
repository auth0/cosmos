import styled from 'styled-components'

import { colors, fonts, spacing, misc } from '@auth0/cosmos-tokens'

const config = {
  basic: {
    background: colors.input.background,
    border: colors.input.border,
    hoverBorder: colors.input.borderHover,
    focusBorder: colors.input.borderFocus,
    placeholder: colors.input.placeholder
  },
  readOnly: {
    background: colors.input.backgroundReadOnly,
    border: colors.input.border,
    hoverBorder: colors.input.border,
    focusBorder: colors.input.border,
    placeholder: colors.input.placeholderReadOnly
  },
  error: {
    background: colors.input.background,
    border: colors.input.borderError,
    hoverBorder: colors.input.borderError,
    focusBorder: colors.input.borderError
  }
}

const getAttributes = props => {
  if (props.readOnly) return config.readOnly
  else if (props.hasError || props.error) return config.error
  else return config.basic
}

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;

  background: ${props => getAttributes(props).background};
  border: 1px solid;
  border-color: ${props => getAttributes(props).border};
  border-bottom-left-radius: ${props => (props.prepend != null ? '0' : misc.radius)};
  border-top-left-radius: ${props => (props.prepend != null ? '0' : misc.radius)};
  border-bottom-right-radius: ${props => (props.append != null ? '0' : misc.radius)};
  border-top-right-radius: ${props => (props.append != null ? '0' : misc.radius)};

  font-family: ${props => (props.code ? fonts.family.code : 'inherit')};
  font-size: ${props => (props.code ? '13px' : 'inherit')};
  color: ${colors.text.inputs};

  padding: ${misc.inputs.padding} ${spacing.small};

  cursor: ${props => (props.readOnly ? 'not-allowed' : 'auto')};
  transition: border-color ${misc.animationDuration}, box-shadow ${misc.animationDuration};

  &:hover {
    border-color: ${props => getAttributes(props).hoverBorder};
  }
  &:focus {
    border-color: ${props => getAttributes(props).focusBorder};
    box-shadow: 0px 0px 0 1px ${props => getAttributes(props).focusBorder};
    outline: none;
  }
  &::-webkit-input-placeholder {
    color: ${props => getAttributes(props).placeholder};
  }
`

const Input = styled.div`
  display: flex;
  align-items: center;
`

const InputGroup = styled.div`
  padding: 10px 12px;
  background-color: #ccc;
  height: ${props => misc.input[props.size].height};
  border: 1px solid #ccc;
  border-left-width: ${props => (props.append != null ? '0' : '1px')};
  border-right-width: ${props => (props.prepend != null ? '0' : '1px')};
  border-bottom-left-radius: ${props => (props.append != null ? '0' : misc.radius)};
  border-top-left-radius: ${props => (props.append != null ? '0' : misc.radius)};
  border-bottom-right-radius: ${props => (props.prepend != null ? '0' : misc.radius)};
  border-top-right-radius: ${props => (props.prepend != null ? '0' : misc.radius)};
  color: #555;
`

export { StyledInput, Input, InputGroup }
