import styled from 'styled-components'
import { colors, spacing } from '@auth0/cosmos-tokens'

const TabLink = styled.a`
  display: inline-block;
  padding: ${spacing.small} 0;
  margin-right: ${spacing.large};
  color: ${props => (props.selected ? colors.base.text : colors.link.default)};
  cursor: ${props => (props.selected ? 'default' : 'pointer')};
  border-bottom: 1px solid ${props => (props.selected ? colors.base.text : 'transparent')};
  margin-bottom: -1px;

  &:hover {
    color: ${props => (!props.selected ? colors.link.defaultHover : null)};
  }
`

export default TabLink
