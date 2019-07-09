import * as React from "react";

import Automation from "../../_helpers/automation-attribute";
import bytesConversion from "../../_helpers/bytes-conversion";
import Button from "../../atoms/button";
import Icon from "../../atoms/icon";
import styled from "../../styled";
import { colors, misc } from "../../tokens";
import { spacing } from "../../tokens/v2";
import { StyledInput } from "../_styled-input";

export type FileInputSize = 'default' | 'large' | 'small' | 'compressed'

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
  files: any[]
  /** files state */
  multiple?: boolean
  renderItem?: Function
}

class FileInput extends React.Component<IFileInputProps> {
  static bytesConversion = bytesConversion
  static Element = styled.div``
  static Button = styled(Button)``

  static Container = styled.div`
    position: relative;
  `
  static Input = styled.input`
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
  static Label = styled.label`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: flex;
    height: ${misc.button.default.height};
    border-color: yellow;
  `

  static Text = styled.span`
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

  static List = styled.ul`
    margin-top: ${spacing.xsmall};
  `

  static ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e4e4;
    padding-top: ${spacing.xsmall};
    padding-bottom: ${spacing.xsmall};
  `

  static ListItemBody = styled.div``

  static FileName = styled.span`
    margin-left: ${spacing.xsmall};
  `

  static FileNameWeight = styled.span`
    margin-left: 12px;
    color: ${colors.text.secondary};
  `

  static Card = styled.div`
    border: 1px solid #e4e4e4;
    border-radius: 3px;
    padding: ${spacing.small};
  `
  static defaultProps = {
    multiple: false
  }

  onChangeHandler = event => {
    const files = Array.from(event.target.files)

    if (this.props.onAttach) {
      this.props.onAttach(files)
    }
  }

  onDeleteHandler = fileIndex => {
    if (this.props.onDelete) {
      this.props.onDelete(fileIndex)
    }
  }

  render() {
    const { multiple, files: selectedFiles } = this.props

    return (
      <FileInput.Element {...Automation('file-input')} {...this.props}>
        <FileInput.Container>
          <FileInput.Input type="file" multiple={multiple} onChange={this.onChangeHandler} />
          <FileInput.Label htmlFor="customFileLong">
            <FileInput.Button icon="plus">Choose File</FileInput.Button>
            {selectedFiles && (
              <FileInput.Text>{selectedFiles.length} files selected</FileInput.Text>
            )}
          </FileInput.Label>
        </FileInput.Container>

        <FileInput.List {...Automation('file-input.list')}>
          {selectedFiles &&
            selectedFiles.map((file, fileIndex) => {
              if (this.props.renderItem) {
                return this.props.renderItem(file)
              }

              return (
                <FileInput.ListItem key={file.name} {...Automation('file-input.list-item')}>
                  <FileInput.ListItemBody>
                    <Icon name="attachment" color={colors.text.secondary} size={18} />
                    <FileInput.FileName>{file.name}</FileInput.FileName>
                    <FileInput.FileNameWeight>
                      {bytesConversion(file.size)}
                    </FileInput.FileNameWeight>
                  </FileInput.ListItemBody>
                  <FileInput.Button
                    icon="delete"
                    size="small"
                    appearance="link"
                    label="Remove"
                    onClick={() => this.onDeleteHandler(fileIndex)}
                  />
                </FileInput.ListItem>
              )
            })}
        </FileInput.List>
      </FileInput.Element>
    )
  }
}

export default FileInput
export { StyledInput }
