import * as React from 'react'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'

import { colors } from '@auth0/cosmos-tokens'

export type ILinkTarget = '_blank' | '_self' | '_parent' | '_top'

export interface ILinkProps {
  href?: string
  target?: ILinkTarget
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  children?: React.ReactNode
}

const Link = (props: ILinkProps) => (
  <Link.Element {...Automation('link')} {...props}>
    {props.children}
  </Link.Element>
)

Link.Element = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
  &:hover {
    color: ${colors.link.defaultHover};
  }
`

const StyledLink = Link.Element

Link.defaultProps = {
  target: '_self'
}

export default Link
export { StyledLink }
