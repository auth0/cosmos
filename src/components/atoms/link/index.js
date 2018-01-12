import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

import { colors } from '../../../tokens/'

const StyledLink = styled.a`
  color: ${colors.link.foreground.default};
  text-decoration: none;
  &:hover {
    color: ${colors.link.foreground.hover};
  }
  &:focus {
    color: ${colors.link.foreground.focus};
  }
`

const Link = props => <StyledLink {...props}>{props.children}</StyledLink>

Link.propTypes = {
  href: propTypes.string,
  target: propTypes.string
}

Link.defaultProps = {
  href: null,
  target: null
}

export default Link
