import styled from 'styled-components'
import { colors, spacing } from '../../../tokens'

const TabLink = styled.a`
  display: inline-block;
  padding: ${spacing.small} 0;
  margin-right: ${spacing.large};
  color: ${props => (props.selected ? colors.link.default : colors.link.focus)};
  cursor: ${props => (props.selected ? 'default' : 'pointer')};
  border-bottom: 1px solid ${props => (props.selected ? colors.base : 'transparent')};
  margin-bottom: -1px;
`

export default TabLink
