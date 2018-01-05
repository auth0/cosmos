import styled from 'styled-components'
import { colors, spacing } from '../../../tokens'

const TabLink = styled.a`
  padding: ${spacing.large};
  color: ${props => (props.selected ? colors.base : colors.blue)};
  cursor: ${props => (props.selected ? 'default' : 'pointer')};
`

export default TabLink
