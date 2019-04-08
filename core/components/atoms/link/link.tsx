import * as React from 'react'
import styled from '../../styled'
import Automation from '../../_helpers/automation-attribute'

import { colors } from '../../tokens'

export type LinkTarget = '_blank' | '_self' | '_parent' | '_top'
export type LinkOnClickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void

export interface ILinkProps {
  /** HTML ID of the component */
  id?: string
  href?: string
  target?: LinkTarget
  rel?: string
  onClick?: LinkOnClickHandler
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
