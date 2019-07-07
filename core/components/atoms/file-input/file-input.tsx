import * as React from "react";

import { RowLayout } from "../..";
import Automation from "../../_helpers/automation-attribute";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import StackLayout from "../../layouts/stack-layout";
import styled from "../../styled";
import { colors, misc } from "../../tokens";
import { spacing } from "../../tokens/v2";
import { StyledInput } from "../_styled-input";
import Avatar from "../avatar";

export type FileInputSize = 'default' | 'large' | 'small' | 'compressed'
export interface IFile {
  fileName: string
  progress: number | boolean // Determinated(number) | Indeterminated(boolean)
}

export interface IFileInputProps {
  /** HTML ID for the element */
  id?: string
  /** HTML name for the element */
  name?: string
  /** Make input readOnly if it does not validate constraint */
  readOnly?: boolean
  /** Pass hasError to show error state */
  hasError?: boolean
  /** @deprecated:hasError Pass error string directly to show error state */
  error?: string
  /** onAttach transparently passed to the input */
  onAttach?: Function
  /** onDelete transparently passed to the input */
  onDelete?: Function
  /** The current value for the field */
  value?: string
  /** The (HTML) type for the input. */
  type?: string
  /** The (HTML) label for the input. */
  label: string
  /** disabled state */
  disabled?: boolean
  /** accept state */
  accept?: string[]
  /** files state */
  files: IFile[]
  /** files state */
  multiple?: boolean
}

const FileInput = (props: IFileInputProps) => {
  return (
    <FileInput.Element>
      <FileInputInputContainer>
        <FileInputInput type="file" multiple={props.multiple} />
        <FileInputLabel htmlFor="customFileLong">
          <FileInput.Button icon="plus">Choose File</FileInput.Button>
          <FileInputText>3 files selected</FileInputText>
        </FileInputLabel>
      </FileInputInputContainer>

      <FileInputCard>
        <StackLayout distribution="spaceBetween">
          <StackLayout gutter="small">
            <Avatar type="resource" icon="clients" size="large" />
            <RowLayout gutter="xsmall">
              <p>Subject</p>
              <p>Validation</p>
            </RowLayout>
          </StackLayout>
          <Button icon="delete" size="small" appearance="link" label="Remove" />
        </StackLayout>
      </FileInputCard>

      <FileInputList>
        <FileInputListItem>
          <FileInputListItemBody>
            <Icon name="attachment" color={colors.text.secondary} size={18} />
            <FileInputFileName>Name opqf the file</FileInputFileName>
            <FileInputFileNameWeight>836kb</FileInputFileNameWeight>
          </FileInputListItemBody>
          <Button icon="delete" size="small" appearance="link" label="Remove" />
        </FileInputListItem>
        <FileInputListItem>
          <FileInputListItemBody>
            <Icon name="attachment" color={colors.text.secondary} size={18} />
            <FileInputFileName>Name of the file</FileInputFileName>
            <FileInputFileNameWeight>836kb</FileInputFileNameWeight>
          </FileInputListItemBody>
          <Button icon="delete" size="small" appearance="link" label="Remove" />
        </FileInputListItem>
        <FileInputListItem>
          <FileInputListItemBody>
            <Icon name="attachment" color={colors.text.secondary} size={18} />
            <FileInputFileName>Name of the file</FileInputFileName>
            <FileInputFileNameWeight>836kb</FileInputFileNameWeight>
          </FileInputListItemBody>
          <Button icon="delete" size="small" appearance="link" label="Remove" />
        </FileInputListItem>
        <FileInputListItem>
          <FileInputListItemBody>
            <Icon name="attachment" color={colors.text.secondary} size={18} />
            <FileInputFileName>Name of the file</FileInputFileName>
            <FileInputFileNameWeight>836kb</FileInputFileNameWeight>
          </FileInputListItemBody>
          <Button icon="delete" size="small" appearance="link" label="Remove" />
        </FileInputListItem>
      </FileInputList>
    </FileInput.Element>
  )
}

FileInput.Element = styled.div``

const FileInputInputContainer = styled.div`
  position: relative;
`

const FileInputInput = styled.input`
  position: relative;
  z-index: 2;
  width: 100%;
  height: ${misc.button.default.height};
  margin: 0;
  opacity: 0;

  /* &:focus ~ .custom-file-label {
    border-color: $custom-file-focus-border-color;
    box-shadow: $custom-file-focus-box-shadow;
  }

  &[disabled] ~ .custom-file-label {
    background-color: $custom-file-disabled-bg;
  } */
`

const FileInputLabel = styled.label`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1;
  display: flex;
  height: ${misc.button.default.height};
  border-color: yellow;
`
FileInput.Button = styled(Button)`
  /* pointer-events: none; */
`

const FileInputText = styled.span`
  display: block;
  flex-grow: 1;
  margin-left: 12px;
  overflow: hidden;
  /* centering with line height because of the ellipse */
  line-height: ${misc.button.default.height};
  align-items: center;

  color: black;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const FileInputList = styled.ul`
  margin-top: ${spacing.xsmall};
`

const FileInputListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e4e4;
  padding-top: ${spacing.xsmall};
  padding-bottom: ${spacing.xsmall};
`

const FileInputListItemBody = styled.div``

const FileInputFileName = styled.span`
  margin-left: ${spacing.xsmall};
`

const FileInputFileNameWeight = styled.span`
  margin-left: 12px;
  color: ${colors.text.secondary};
`

const FileInputCard = styled.div`
  border: 1px solid #e4e4e4;
  border-radius: 3px;
  padding: ${spacing.small};
`

FileInput.defaultProps = {
  readOnly: false,
  code: false,
  error: null,
  onChange: null,
  type: 'text',
  size: 'default',
  actions: []
}

export default FileInput
export { StyledInput }

// TODO
// Put this input into a form
// Check diffrent states
// Add middle truncation
// Error message
// info message
