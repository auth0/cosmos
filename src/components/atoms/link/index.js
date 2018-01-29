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

const A = props => <StyledLink {...props}>{props.children}</StyledLink>

A.propTypes = {
  href: propTypes.string
}

A.defaultProps = {}

export default A
