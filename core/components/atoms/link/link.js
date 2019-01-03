import React from 'react'
import propTypes from 'prop-types'
import styled from '@auth0/cosmos/styled'
import Automation from '../../_helpers/automation-attribute'
import CosmosContext from '../../_helpers/cosmos-context'

import { colors } from '@auth0/cosmos-tokens'

const handleNavigation = (onNavigate, href) => event => onNavigate(event, href)

const Link = props => (
  <CosmosContext.Consumer>
    {config => {
      let onClick
      if (props.onClick) {
        // If an onClick handler is specified, use it.
        onClick = props.onClick
      } else if (props.href && config && config.onNavigate) {
        // If there is contextual configuration, and it defines an onNavigate handler, use it.
        // This allows Cosmos to be integrated with client-side routing solutions.
        onClick = handleNavigation(config.onNavigate, props.href)
      }
      return (
        <Link.Element {...Automation('link')} {...props} onClick={onClick}>
          {props.children}
        </Link.Element>
      )
    }}
  </CosmosContext.Consumer>
)

Link.Element = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
  &:hover {
    color: ${colors.link.defaultHover};
  }
`

const StyledLink = Link.Element

Link.propTypes = {
  /** URL to follow */
  href: propTypes.string,
  /** specifies where to open the linked document */
  target: propTypes.oneOf(['_blank', '_self', '_parent', '_top']),
  /** function to be called on click */
  onClick: propTypes.func
}

Link.defaultProps = {
  target: '_self'
}

export default Link
export { StyledLink }
