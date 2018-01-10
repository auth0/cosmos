import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import PropTypes from 'prop-types'
import { colors } from '../../tokens'

import iconData from './icons.json'

injectGlobal`
  @font-face {
    font-family: budicon-font;
    src: url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.eot);
    src: url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.eot#iefix) format("embedded-opentype"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.woff) format("woff"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.ttf) format("truetype"),url(https://cdn.auth0.com/fonts/budicons/fonts/budicon-font.svg#budicon-font) format("svg");
  }
`

const StyledIcon = styled.i`
  font-family: 'budicon-font';
  display: inline-block;
  vertical-align: middle;
  font-size: ${props => props.size}px;
  font-weight: 400;
  font-style: normal;
  color: ${props => props.color};
  &:after {
    content: '${props => props.icon.content || ''}';
  }
`

const Icon = props => {
  const icon = iconData.filter(icon => icon.name === props.type)[0] || {}
  return <StyledIcon icon={icon} {...props} />
}

Icon.propTypes = {
  /** Icon type */
  type: PropTypes.string.isRequired,
  /** Icon size */
  size: PropTypes.number,
  /** Icon foreground color */
  color: PropTypes.string
}

Icon.defaultProps = {
  size: 14,
  color: colors.base
}

export default Icon
export { StyledIcon }
