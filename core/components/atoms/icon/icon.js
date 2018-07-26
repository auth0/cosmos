import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import { colors } from '@auth0/cosmos-tokens'
import { icons } from './icons.json'

const Icon = props => {
  // If the icon name isn't found, show a question mark instead.
  const icon = icons[props.name] || icons.help

  // Use an icon name from tokens, fallback to hexcode (without validation)
  const color = colors.base[props.color] || props.color

  return (
    <Icon.Element {...props}>
      <Image
        width={props.size}
        height={props.size}
        viewBox={`0 0 ${icon.width} ${icon.height}`}
        color={color}
      >
        {icon.paths.map((path, index) => <path key={index} d={path} />)}
      </Image>
    </Icon.Element>
  )
}

Icon.Element = styled.i`
  display: inline-block;
  line-height: 1;
`
const Image = styled.svg`
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
  path {
    fill: ${props => props.color};
  }
`

const __ICONNAMES__ = Object.keys(icons)
const __COLORS__ = Object.keys(colors.base)

Icon.propTypes = {
  /** Icon name */
  name: PropTypes.oneOf(__ICONNAMES__).isRequired,
  /** Icon size */
  size: PropTypes.number,
  /** Icon foreground color */
  color: PropTypes.oneOf(__COLORS__)
}

Icon.defaultProps = {
  size: 20,
  color: 'default'
}

export default Icon
export { __ICONNAMES__ }
