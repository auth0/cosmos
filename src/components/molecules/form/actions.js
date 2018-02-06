import styled from 'styled-components'

import { spacing } from '../../../tokens'

const Actions = styled.div`
  padding-left: ${props => props.labelWidth};
  margin-top: ${spacing.medium};
  margin-bottom: ${spacing.small};
`

export default Actions
