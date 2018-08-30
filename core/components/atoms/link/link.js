import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'
import Automation from '../../_helpers/automation-attribute'

import { colors } from '@auth0/cosmos-tokens'

const StyledLink = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
  &:hover {
    color: ${colors.link.defaultHover};
  }
`

const Link = props => <StyledLink {...props} {...Automation('link')}>{props.children}</StyledLink>

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
