import styled from 'styled-components'
import { spacing } from '../../../tokens'

const FieldSet = styled.fieldset`
  border: none;
  padding: 0;
  margin-bottom: ${spacing.large};
  &:last-child {
    margin-bottom: 0;
  }
`

export default FieldSet
