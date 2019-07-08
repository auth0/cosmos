import * as React from 'react'
import styled from '../../styled'

import { misc } from '../../tokens'
import { StyledInput } from '../_styled-input'
import Automation from '../../_helpers/automation-attribute'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'
import { colors } from '../../tokens'

import { spacing } from '../../tokens/v2'
import StackLayout from '../../layouts/stack-layout'
import { RowLayout } from '../..'
import Avatar from '../avatar'

export type FileInputSize = 'default' | 'large' | 'small' | 'compressed'
export interface IFile {
  fileName: string
  progress: number
  isUploaded?: boolean
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

interface IFileInputState {
  selectedFiles: any[]
}

class FileInput extends React.Component<IFileInputProps, IFileInputState> {
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
    type: 'text',
    size: 'default'
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedFiles: []
    }
  }

  onChangeHandler = (event) => {
    let files = event.target.files
    this.setState({
      selectedFiles: [...this.state.selectedFiles, ...Array.from(files)]
    })
  }

  onDeleteHandler = (fileIndex) => {
    this.setState({
      selectedFiles: this.state.selectedFiles.filter((file, index) => !(index === fileIndex))
    })
  }



  render() {
    const { selectedFiles } = this.state
    return (
      <FileInput.Element>
        <FileInput.Container>
          <FileInput.Input type="file" multiple={true} onChange={this.onChangeHandler} />
          <FileInput.Label htmlFor="customFileLong">
            <FileInput.Button icon="plus">Choose File</FileInput.Button>
            {selectedFiles &&
              <FileInput.Text>{selectedFiles.length} files selected</FileInput.Text>
            }
          </FileInput.Label>
        </FileInput.Container>

        {/* 
        <FileInput.Card>
          <StackLayout distribution="spaceBetween">
            <StackLayout gutter="small">
              <Avatar type="resource" icon="clients" size="large" />
              <RowLayout gutter="xsmall">
                <p>Subject</p>
                <p>Validation</p>
              </RowLayout>
            </StackLayout>
            <FileInput.Button icon="delete" size="small" appearance="link" label="Remove" onDelete={this.handleDelete} />
          </StackLayout>
        </FileInput.Card> */}

        <FileInput.List>
          {selectedFiles &&
            selectedFiles.map((file, fileIndex) => {
              return (
                <FileInput.ListItem key={file.name}>
                  <FileInput.ListItemBody>
                    <Icon name="attachment" color={colors.text.secondary} size={18} />
                    <FileInput.FileName>{file.name}</FileInput.FileName>
                    <FileInput.FileNameWeight>{file.size}</FileInput.FileNameWeight>
                  </FileInput.ListItemBody>
                  <FileInput.Button icon="delete" size="small" appearance="link" label="Remove" onClick={() => this.onDeleteHandler(fileIndex)} />
                </FileInput.ListItem>
              )
            })
          }
        </FileInput.List>
      </FileInput.Element>
    )
  }
}

export default FileInput
export { StyledInput }