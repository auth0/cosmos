import React from 'react'
import propTypes from 'prop-types'
import styled from 'styled-components'

import { colors } from '../../../tokens/'

const StyledLink = styled.a`
  color: ${colors.link.default};
  text-decoration: none;
  &:hover {
    color: ${colors.link.defaultHover};
  }
`

const Link = props => <StyledLink {...props}>{props.children}</StyledLink>

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
