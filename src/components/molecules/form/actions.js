import styled from 'styled-components'

import { spacing, colors } from '../../../tokens'

const Actions = styled.div`
  padding-left: ${props => props.labelWidth};
  height: 100px;
  margin-top: ${spacing.xlarge};
  border-top: 1px solid ${colors.base.grayLight};
  padding-top: ${spacing.medium};
`

export default Actions
