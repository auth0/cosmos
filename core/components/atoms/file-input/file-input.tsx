import * as React from 'react'
import styled from '../../styled'

import { misc } from '../../tokens'
import { StyledInput } from '../_styled-input'
import Automation from '../../_helpers/automation-attribute'
import Button from '../../atoms/button'
import Icon from '../../atoms/icon'

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

const FileInput = (props: IFileInputProps) => {
  return (
    <FileInput.Element>
      <input type="file" multiple={props.multiple} />
      <label htmlFor="customFileLong">
        <FileInput.Button>Browse</FileInput.Button>
        <span>test test</span>
      </label>

      <ul>
        <li>
          <span>icon</span>
          <span>text</span>
          <button>icon</button>
        </li>
      </ul>
    </FileInput.Element>
  )
}

FileInput.Element = styled.div``
console.log('ahre', Button)
FileInput.Button = styled(Button)`
  pointer-events: none;
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
